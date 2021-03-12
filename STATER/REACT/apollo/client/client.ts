/* eslint-disable no-console */
import { ApolloClient, ApolloLink, from, split } from '@apollo/client'
import { HttpLink } from '@apollo/client/link/http'
import { WebSocketLink } from '@apollo/client/link/ws'
import * as Sentry from '@sentry/react'
import { fromPromise } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { getMainDefinition } from 'apollo-utilities'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { getRefreshToken, getToken, refreshAccessToken, removeToken } from 'utils/auth'
import { cache } from './cache'

const WS_ENDPOINT = process.env.REACT_APP_SUBSCRIPTION_ENDPOINT || ''
const HTTP_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || ''
const subClient = new SubscriptionClient(WS_ENDPOINT, { lazy: true, reconnect: true }, null, [])
const wsLink = new WebSocketLink(subClient)
const httpLink = new HttpLink({ uri: HTTP_ENDPOINT })
const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
  },
  wsLink,
  httpLink
)

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = getToken()
  const { headers } = operation.getContext()
  operation.setContext({
    headers: {
      ...headers,
      ...(token && {
        authorization: `Bearer ${token}`
      })
    }
  })

  return forward(operation)
})

const errorHandler = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      if ((extensions as Record<string, string>).code !== 'BAD_USER_INPUT') {
        Sentry.captureMessage(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      }
    })
  }
  if (networkError && 'statusCode' in networkError) {
    if (networkError.statusCode === 401) {
      const refreshToken = getRefreshToken()
      if (!refreshToken) {
        removeToken()
        window.open(process.env.REACT_APP_LOGIN_URL, '_self')
        return
      }
      return fromPromise(
        refreshAccessToken(refreshToken).catch(error => {
          console.error(error)
          return
        })
      )
        .filter(value => Boolean(value))
        .flatMap(accessToken => {
          const oldHeaders = operation.getContext().headers
          operation.setContext({
            headers: {
              ...oldHeaders,
              authorization: `Bearer ${accessToken}`
            }
          })
          return forward(operation)
        })
    }
    Sentry.captureException(networkError)
  }
})

export const client = new ApolloClient({
  cache,
  link: from([authMiddleware, (errorHandler as unknown) as ApolloLink, link]),
  defaultOptions: {
    watchQuery: {
      notifyOnNetworkStatusChange: true
    }
  }
})

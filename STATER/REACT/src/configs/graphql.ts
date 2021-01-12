import { ApolloClient, InMemoryCache, split, ApolloLink, from } from '@apollo/client'

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
  },
  wsLink,
  httpLink
)

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authMiddleware, errorHandler, link])
})

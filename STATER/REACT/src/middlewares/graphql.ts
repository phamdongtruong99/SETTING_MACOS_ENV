import { ApolloLink } from '@apollo/client'


export const authMiddleware = new ApolloLink((operation, forward) => {
  const { headers } = operation.getContext()
  operation.setContext({
    headers: {
      ...headers,
      ...(localStorage.getItem('sessionToken') && {
        authorization: `Bearer ${localStorage.getItem('sessionToken')}`
      })
    }
  })

  return forward(operation)
})

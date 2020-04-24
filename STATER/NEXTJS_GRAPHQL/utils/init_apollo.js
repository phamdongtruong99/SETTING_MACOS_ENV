import { AppoloClient, HttpLink } from 'apollo-boost';

let apolloClient = null;

const create(ininitialState){
  const isBrowser = typeof window !== 'undefined'
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    link: new HttpLink({
      uri: isBrowser ? 'http://localhost:4000' : 'http://backend:4000',
      credentials: 'same-origin'
    })
  })
}
import * as qs from 'query-string'
import { useMemo } from 'react'
import { match, useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom'
import * as H from 'history'

interface Routes<S> {
  back: () => void
  history: H.History<unknown>
  location: H.Location<unknown>
  match: match<{}>
  pathname: string
  push: (path: string) => void
  query: Record<string, unknown>
  replace: (path: string) => void
  routerState: S
}

function useRouter<S>(): Routes<S> {
  const params = useParams()
  const location = useLocation<S>()
  const history = useHistory()
  const match = useRouteMatch()

  return useMemo(() => {
    return {
      back: history.goBack,
      history,
      location,
      match,
      pathname: location.pathname,
      push: history.push,
      query: {
        ...qs.parse(location.search),
        ...params
      },
      replace: history.replace,
      routerState: location.state
    }
  }, [history, location, params, match])
}

export default useRouter

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from 'react'

function useCallbackState<T>(initialState: unknown) {
  const [state, setState] = useState(initialState)
  const cbRef = useRef<any>(null)

  const setCallbackState = (state: T, cb: (s: T) => undefined | void) => {
    cbRef.current = cb
    setState(state)
  }

  useEffect(() => {
    if (cbRef.current) {
      cbRef.current(state)
      cbRef.current = null
    }
  }, [state])

  return [state, setCallbackState]
}

export default useCallbackState

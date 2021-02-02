import { useState, useMemo } from 'react'

function useInput(initialState = '') {
  const [state, setState] = useState(initialState)

  const handlers = useMemo(
    () => ({
      handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e?.target?.value)
      },
      resetInput: () => {
        setState(initialState)
      }
    }),
    [initialState]
  )

  return [state, handlers] as [string, typeof handlers]
}

export default useInput

import { useEffect } from 'react'

export default function useSetTimeout(fn, delay) {

  useEffect(() => {
    const t = setTimeout(fn, delay)

    return () => {
      clearTimeout(t)
    }
  }, [ delay ])
}

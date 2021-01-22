import { useState, useEffect } from 'react'

export default function <T>(value: T, delayInMilliseconds: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const debounceHandler = setTimeout(() => setDebouncedValue(value), delayInMilliseconds)

    return () => clearTimeout(debounceHandler)
  }, [value, delayInMilliseconds])

  return debouncedValue
}

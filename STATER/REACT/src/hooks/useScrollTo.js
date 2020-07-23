import { useRef } from 'react'

const useScrollTo = () => {
  const ref = useRef(null)
  const scrollTo = () => window.scrollTo(0, ref.current.offsetTop);

  return { ref, scrollTo }
}

export default useScrollTo;

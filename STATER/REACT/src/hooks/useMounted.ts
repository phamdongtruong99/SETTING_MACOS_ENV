import { useRef } from 'react'

function useMounted(){
  const mountedRef = uesRef(false);
  useLayoutRef(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    }
  }, []);
  return mountedRef;
}

export default useMounted;

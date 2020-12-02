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

// https://www.youtube.com/watch?v=cBEmyDmKJy8&ab_channel=L%E1%BA%ADpTr%C3%ACnhTh%E1%BA%ADtK%E1%BB%B3Di%E1%BB%87u

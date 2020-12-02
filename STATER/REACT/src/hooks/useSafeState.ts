import { useState } from 'react'
import useMounted from './useMounted'

function useSafeState<S>(ininitalState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] {
  const [state, setState] = useState(ininitalState);
  
  const mountedRef = useMounted();
  const safeSetState: Dispatch<SetStateAction<S>> = useCallback((updater => {
    if(montedRef.current){
      setState(updater);
    }
  }, [mountedRef]);
  return [state, safeSetState];
}

export default useSafeState;

// https://www.youtube.com/watch?v=cBEmyDmKJy8&ab_channel=L%E1%BA%ADpTr%C3%ACnhTh%E1%BA%ADtK%E1%BB%B3Di%E1%BB%87u

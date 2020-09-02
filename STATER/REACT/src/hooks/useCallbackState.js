import { useState, useRef, useEffect } from "react";

function useCallbackState(initialState) {
  const [state, setState] = useState(initialState);
  const cbRef = useRef(null);

  const setCallbackState = (state, cb) => {
    cbRef.current = cb;
    setState(state);
  };

  useEffect(() => {
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null;
    }
  }, [state]);

  return [state, setCallbackState];
}

export default useCallbackState;

import { useRef, useEffect } from 'react';

const usePrevProp = prop => {
  const prevProp = useRef(undefined);

  useEffect(() => {
    prevProp.current = prop;
  }, [prop]);

  return prevProp.current;
};

export default usePrevProp;

//git: https://github.com/donavon/use-prev-prop
// ex: https://codesandbox.io/s/useprevprop-uyy4p

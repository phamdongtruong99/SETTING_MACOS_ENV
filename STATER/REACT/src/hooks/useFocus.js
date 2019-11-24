import { useState, useEffect, useRef } from 'react';

const useFocus = (ref, defaultState = false) => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    const onFocus = () => setState(true);
    const onBlur = () => setState(false);
    ref.current.addEventListener('focus', onFocus);
    ref.current.addEventListener('blur', onBlur);

    return () => {
      ref.current.removeEventListener('focus', onFocus);
      ref.current.removeEventListener('blur', onBlur);
    };
  }, [ref]);

  return state;
};

export default useFocus;

// ex: https://codesandbox.io/s/72o0nwp86q?from-embed

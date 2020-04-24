import { useEffect } from 'react';

const useEffectOnce = (effect) => {
  useEffect(effect, []);
};

export default useEffectOnce;

// https://github.com/streamich/react-use/blob/master/src/useEffectOnce.ts

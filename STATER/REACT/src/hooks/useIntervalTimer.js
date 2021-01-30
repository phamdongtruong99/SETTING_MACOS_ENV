import { useState } from 'react';
import useSetInterval from './useSetInterval';

const useIntervalTimer = (time) => {
  const [timer, setTimer] = useState(time);

  useSetInterval(() => {
    setTimer((currentTimer) => {
      if (currentTimer > 0) {
        return currentTimer - 1;
      }
      return currentTimer;
    });
  }, 1000);
  return timer;
};

export default useIntervalTimer;

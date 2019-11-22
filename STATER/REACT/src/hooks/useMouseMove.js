import { useState } from 'react';
import useEventListener from './useEventListener';

const useMouseMove = () => {
  const [coords, setCoords] = useState([0, 0]);
  useEventListener('mousemove', ({ clientX, clientY }) => {
    setCoords([clientX, clientY]);
  });
  return coords;
};

export default useMouseMove;

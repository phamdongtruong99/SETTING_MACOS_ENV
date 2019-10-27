import { useEffect, useState } from 'react';
import { Dimensions as RNDimensions } from 'react-native';

const getDimensions = (type, getDimensions) => {
  const [dimensions, setDimensions] = useState(() => RNDimensions.get(type));
  useEffect(() => {
    const handleDimensionsChange = ({ window, screen }) => {
      const newDimensions = getDimensions(window, screen);
      if (
        dimensions.height !== newDimensions.height ||
        dimensions.width !== newDimensions.width
      ) {
        setDimensions({ ...newDimensions });
      }
    };
    RNDimensions.addEventListener('change', handleDimensionsChange);

    return () => {
      RNDimensions.removeEventListener('change', handleDimensionsChange);
    };
  }, [RNDimensions]);
  return dimensions;
};

const useWindowDimensions = () => {
  return getDimensions('window', window => window);
};

const useScreenDimensions = () => {
  return getDimensions('screen', (_, screen) => screen);
};

const useDimensions = () => {
  const screen = useScreenDimensions();
  const window = useWindowDimensions();
  return { screen, window };
};

export default useDimensions;

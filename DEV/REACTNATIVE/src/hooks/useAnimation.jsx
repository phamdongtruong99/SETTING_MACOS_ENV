import { Animated } from 'react-native';
import { useState, useEffect } from 'react';

const useAnimation = ({ doAnimation, duration }) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    console.log(`running useEffect:`, doAnimation);
    Animated.timing(animation, {
      toValue: doAnimation ? 1 : 0,
      duration
    }).start();
  }, [doAnimation]);

  return animation;
};

export default useAnimation;

//git : https://github.com/mathias5r/rn-animation-hook/blob/master/hook.js

import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import * as ReactNative from 'react-native';

const BasePage = ({ children }) => {
  const fadeAnim = React.useRef(new ReactNative.Animated.Value(0)).current;

  const fadeIn = () => {
    ReactNative.Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 1,
      duration: 200,
    }).start();
  };

  const fadeOut = () => {
    ReactNative.Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 0,
      duration: 200,
    }).start();
  };

  useFocusEffect(() => {
    fadeIn();
    return fadeOut;
  });

  return (
    <ReactNative.Animated.View style={{ flex: 1, width: '100%',  opacity: fadeAnim }}>
      {children}
    </ReactNative.Animated.View>
  );
};

export default BasePage;

import { useState, useEffect } from 'react';

const useTabAnimation = (isPrevActive: boolean, isActive: boolean): TabAnimation => {
  const textOpacity = useRef(new Animated.Value(isActive ? 1 : 0)).current;
  const tabOffset = useRef(new Animated.Value(isActive ? 0 : INACTIVE_OFFSET)).current;
}
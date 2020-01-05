import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Animated } from 'react-native';
import PropTypes from 'prop-types'


const StyledTextAnimator = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;


const TextAnimator = ({ content, duration, onFinish }) => {
  const animateValues = [];

  const textArr = content.trim().split(' ');
  
  textArr.forEach((_, i) => {
    animateValues[i] = new Animated.Value(0);
  })
  
  const animated = (toValue = 1) => {
    const animations = textArr.map((_, i) => {
      return Animated.timing(animateValues[i], {
        toValue,
        duration: duration
      });
    });
    Animated.stagger(duration / 5, toValue === 0 ? animations.reverse() : animations).start(() => {
      setTimeout(() => 
        animated(toValue === 0 ? 1 : 0)
      , 1000);
      if (onFinish) {
        onFinish();
      }
    });
  }

  useEffect(() => {
    animated();
  }, [])

  return (
    <StyledTextAnimator>
    {textArr.map((word, index) => {
      return (
        <Animated.Text
          key={String(index)}
          style={{
            opacity: animateValues[index],
            transfrom: [
              {
                translateY: Animated.multiply(
                  animateValues[index],
                  new Animated.Value(-5)
                )
              }
            ]
          }}
        >
          {word}
          {`${index < textArr.length ? ' ' : ''}`}
        </Animated.Text>
      )
    })}
    </StyledTextAnimator>
  );
};

TextAnimator.propTypes = {
  onFinish: PropTypes.func,
  duration: PropTypes.number,
  content: PropTypes.string,
};

TextAnimator.defaultProps = {};

export default TextAnimator;
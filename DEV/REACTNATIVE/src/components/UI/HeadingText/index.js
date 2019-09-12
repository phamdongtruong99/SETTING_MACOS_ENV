import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const HeadingText = ({ children, size, color }) => {
  return (
    <Text style={{ fontSize: size, color, fontWeight: '700' }}>{children}</Text>
  );
};

HeadingText.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string
};

HeadingText.defaultProps = {
  size: 28,
  color: '#000'
};

export default HeadingText;

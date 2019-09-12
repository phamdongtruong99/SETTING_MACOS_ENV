import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderColor: '#eee',
    borderWidth: 1,
    padding: 5,
    margin: 8
  }
});

const CustomInput = ({ style, ...props }) => {
  return (
    <TextInput
      {...props}
      style={[styles.input, style]}
      underlineColorAndroid="transparent"
    />
  );
};

CustomInput.propTypes = {
  style: PropTypes.object.isRequired
};

export default CustomInput;

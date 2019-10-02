import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 4,
    backgroundColor: '#1976d2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 6
  },
  text: {
    color: '#fff',
    fontWeight: '500'
  }
});

const CustomButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button]}>
        <Text style={[styles.text]}>
          {' '}
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {};

export default CustomButton;

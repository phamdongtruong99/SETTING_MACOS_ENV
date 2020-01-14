import React from "react";
import { View, Text } from "react-native";
import PropTypes from 'prop-types'

const Cell = ({ value, style }) => (
  <View
    style={{
      borderWidth: 1,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderColor: "black",
      padding: 5,
      width: 100,
      height: 30,
      ...style
    }}
  >
    <Text numberOfLines={1}>{value}</Text>
  </View>
);

Cell.propTypes = {
  value: PropTypes.string,
  style: PropTypes.object,
};

export default Cell;
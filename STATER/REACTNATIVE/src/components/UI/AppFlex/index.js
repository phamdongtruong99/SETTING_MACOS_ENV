import React, { memo } from 'react';
import {
  View,
} from 'react-native';

import PropTypes from 'prop-types';

const AppFlex = ({
  flex,
  direction, justify, alignItems, alignContent, self, bg, width, height,
  children,
  otherStyles,
}) => (
  <View style={[{
    flex,
    flexDirection: direction,
    justifyContent: justify,
    alignItems,
    alignContent,
    backgroundColor: bg,
    alignSelf: self,
    width,
    height,
  }, otherStyles]}
  >
    {children}
  </View>
);

AppFlex.propTypes = {
  flex: PropTypes.number,
  direction: PropTypes.instanceOf(['row', 'column', 'column-reverse', 'row-reverse']),
  justify: PropTypes.instanceOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  alignItems: PropTypes.instanceOf(['row', 'column', 'column-reverse', 'row-reverse']),
  alignContent: PropTypes.instanceOf(['flex-start', 'flex-end', 'stretch', 'center', 'space-between', 'space-around']),
  self: PropTypes.instanceOf(['row', 'column', 'column-reverse', 'row-reverse']),
  bg: PropTypes.string,
  width: PropTypes.instanceOf([PropTypes.string, PropTypes.number]),
  height: PropTypes.instanceOf([PropTypes.string, PropTypes.number]),
  children: PropTypes.element,
  otherStyles: PropTypes.instanceOf([PropTypes.array, PropTypes.object]),
};

AppFlex.defaultProps = {
  flex: null,
  direction: 'column',
  justify: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'flex-start',
  self: 'stretch',
  bg: 'transparent',
  width: '100%',
  height: '100%',
  children: null,
  otherStyles: {},
};

export default memo(AppFlex);

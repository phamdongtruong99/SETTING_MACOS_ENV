import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './style';

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;

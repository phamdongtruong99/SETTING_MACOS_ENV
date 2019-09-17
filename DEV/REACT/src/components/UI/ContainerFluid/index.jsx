import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './style';

const ContainerFluid = ({ children }) => {
  return <StyledContainerFluid>{children}</StyledContainerFluid>;
};

ContainerFluid.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContainerFluid;

import React from 'react';
import PropTypes from 'prop-types';
import StyledFlexBox from './FlexBox.style';

const FlexBox = ({
  flexDirection,
  justifyContent,
  flexWrap,
  alignItems,
  children,
  marginTop,
  marginLeft,
  marginBottom,
  marginRight,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
}) => {
  return (
    <StyledFlexBox
      {...{
        flexDirection,
        justifyContent,
        flexWrap,
        alignItems,
        marginTop,
        marginLeft,
        marginBottom,
        marginRight,
        paddingTop,
        paddingLeft,
        paddingRight,
        paddingBottom,
      }}
    >
      {children}
    </StyledFlexBox>
  );
};

FlexBox.propTypes = {
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginRight: PropTypes.number,
  marginLeft: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  flexWrap: PropTypes.string,
  alignItems: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default FlexBox;

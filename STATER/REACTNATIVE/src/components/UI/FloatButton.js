import React from 'react';
import styled from 'styled-components/native'; 



const FloatButton = ({ onPress }) => {
  return <StyledtButton> Hello FloatButton</StyledtButton>;
};


const StyledtButton = styled.TouchableOpacity`
  background-color: '#378AD9';
  width: 60;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 32px;
  left: 32px;
`;



FloatButton.propTypes = {};

FloatButton.defaultProps = {};

export default FloatButton;
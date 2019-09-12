import React, { useState } from 'react';
import { ReactComponent as MenuToggle1 } from './image/menuToggle1.svg';
import { ReactComponent as MenuToggle2 } from './image/menuToggle2.svg';
import StyledToggle from './style';

export const MenuToggle = () => {
  const [iconStatus, setIconStatus] = useState('default');

  const toggle = () => {
    iconStatus === 'default' ? setIconStatus('open') : setIconStatus('default');
  };

  return (
    <StyledToggle onClick={toggle} status={iconStatus}>
      <MenuToggle1 className="svg-1" />
      <MenuToggle2 className="svg-2" />
    </StyledToggle>
  );
};

export default MenuToggle;

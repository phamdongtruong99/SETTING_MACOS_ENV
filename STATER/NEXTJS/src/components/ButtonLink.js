import React from 'react';

const ButtonLink = React.forwardRef(({ onClick, href, children }, ref) => (
  <a href={href} onClick={onClick} ref={ref}>
    {children}
  </a>
));

export default ButtonLink;

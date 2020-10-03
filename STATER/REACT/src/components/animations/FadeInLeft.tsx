import { Reveal, Tween } from 'react-gsap';
import * as React from 'react'

interface Props {
  children: JSX.element;
}

const FadeInLeft: React.FC<Props> = ({ children }) => (
  <Tween
    from={{ opacity: 0, transform: 'translate3d(-100vw, 0, 0)' }}
    ease="back.out(1.4)"
  >
    {children}
  </Tween>
);

export default FadeInLeft

import React, { useMemo } from 'react';
import { Transition } from 'react-transition-group';
import { TransitionProps } from 'react-transition-group/Transition';

const transitionStyles = {
  fadeIn: {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
  },
  slideInLeft: {
    entering: { transform: 'translateX(100%)' },
    entered: { transform: 'translateX(0)' },
    exiting: { transform: 'translateX(100%)' },
    exited: { transform: 'translateX(100%)' },
  },
  slideInRight: {
    entering: { transform: 'translate(-100%)' },
    entered: { transform: 'translateX(0)' },
    exiting: { transform: 'translateX(-100%)' },
    exited: { transform: 'translateX(-100%)' },
  },
  slideInUp: {
    entering: { transform: 'translateY(100%)' },
    entered: { transform: 'translateY(0)' },
    exiting: { transform: 'translateY(100%)' },
    exited: { transform: 'translateY(100%)' },
  },
  slideInDown: {
    entering: { transform: 'translateY(-100%)' },
    entered: { transform: 'translateY(0)' },
    exiting: { transform: 'translateY(-100%)' },
    exited: { transform: 'translateY(-100%)' },
  },
};

const defaultStyle = {
  transitionProperty: 'all',
};

export function Animate({
  type,
  duration = 300,
  exitDuration = 800,
  timeoutAppear = 0,
  timeoutEnter = 0,
  timeoutExit = exitDuration,
  children,
  style,
  className,
  mountOnEnter = true,
  unmountOnExit = true,
  ...rest
}: Props) {
  const durationStyle = useMemo(
    () => ({
      entering: { transitionDuration: `${duration}ms`, transitionTimingFunction: 'ease-out' },
      entered: { transitionDuration: `${duration}ms`, transitionTimingFunction: 'ease-out' },
      exiting: { transitionDuration: `${exitDuration}ms`, transitionTimingFunction: 'ease-in' },
      exited: { transitionDuration: `${exitDuration}ms`, transitionTimingFunction: 'ease-in' },
    }),
    [duration, exitDuration]
  );

  const timeout = {
    appear: timeoutAppear,
    enter: timeoutEnter,
    exit: timeoutExit,
  };

  return (
    <Transition mountOnEnter={mountOnEnter} unmountOnExit={unmountOnExit} timeout={timeout} {...rest}>
      {(state) => (
        <div
          className={className + ' ' + state}
          style={{
            ...defaultStyle,
            ...durationStyle[state],
            ...transitionStyles[type][state],
            ...style,
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}

type OwnProps = {
  type: keyof typeof transitionStyles;
  duration?: number;
  timeoutAppear?: number;
  timeoutEnter?: number;
  timeoutExit?: number;
  children: React.ReactElement;
  style?: object;
};

type Props = OwnProps & Omit<TransitionProps, 'addEndListener'>;

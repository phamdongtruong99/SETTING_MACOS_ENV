import React from 'react';

import Spacer from './Spacer';
import { joinChildren } from './utils';

function Stack({ children, axis, alignment, distribution, spacing }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: axis === 'horizontal' ? 'row' : 'column',
        alignItems: alignment,
        justifyContent: distribution,
      }}
    >
      {spacing === undefined
        ? children
        : joinChildren(
            children,
            spacing.constructor === Array ? (
              index => spacing[index] && <Spacer size={spacing[index]} />
            ) : typeof spacing === 'number' ? (
              <Spacer size={spacing} />
            ) : (
              spacing
            ),
          )}
    </div>
  );
}

export default Stack;

// https://codesandbox.io/s/easier-layouts-with-a-stack-component-o4r53

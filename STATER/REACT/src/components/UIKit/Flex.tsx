import styled from 'styled-components';
import * as CSS from 'csstype';
import { isNumber } from 'lodash';
interface Props {
  direction?: CSS.Property.FlexDirection;
  justify?: CSS.Property.JustifyContent;
  align?: CSS.Property.AlignItems;
  bg?: string;
  circle?: boolean;
  width?: number | string;
  height?: number | string;
}

const Flex = styled.div(
  ({ direction, justify, align, bg, width, height, circle }: Props) => {
    const formatWidth = isNumber(width) ? `${width}px` : width;
    const formatHeight = isNumber(height) ? `${height}px` : height;
    return `
      display: flex;
      flex-direction: ${direction};
      justify-content: ${justify};
      align-items: ${align};
      background-color: ${bg};
      width: ${formatWidth};
      height: ${formatHeight};
      border-radius: ${circle ? 50 : 100}%;
  `;
  },
);

Flex.defaultProps = {
  direction: 'row',
  align: 'flex-start',
  justify: 'flex-start',
  circle: false,
  width: 'auto',
  height: 'auto',
};

export default Flex;

import styled from 'styled-components';
import * as CSS from 'csstype';

interface Props {
  direction?: CSS.Property.FlexDirection;
  justify?: CSS.Property.JustifyContent;
  align?: CSS.Property.AlignItems;
  bg?: string;
  circle?: boolean;
  width?: number;
  height?: number;
}

const Flex = styled.div(
  ({ direction, justify, align, bg, width, height, circle }: Props) => {
    return `
      display: flex;
      flex-direction: ${direction};
      justify-content: ${justify};
      align-items: ${align};
      background-color: ${bg};
      width: ${width ? `${width}px` : 'auto'};
      height: ${height ? `${height}px` : 'auto'};
      border-radius: ${circle ? 50 : 100}%;
  `;
  },
);

Flex.defaultProps = {
  direction: 'row',
  align: 'flex-start',
  justify: 'flex-start',
  circle: false,
};

export default Flex;

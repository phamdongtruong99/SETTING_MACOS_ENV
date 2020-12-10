import styled from 'styled-components';
import * as CSS from 'csstype';

interface Props {
  direction: CSS.Property.FlexDirection;
  justify: CSS.Property.JustifyContent;
  align: CSS.Property.AlignItems;
}

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props: Props) => props.direction};
  justify-content: ${(props: Props) => props.align};
  align-items: ${(props: Props) => props.align};
`;

Flex.defaultProps = {
  direction: 'row',
  align: 'flex-start',
  justify: 'flex-start',
};

export default Flex;

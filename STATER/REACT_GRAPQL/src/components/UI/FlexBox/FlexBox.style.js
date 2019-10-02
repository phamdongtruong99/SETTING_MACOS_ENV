import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  flex-wrap: ${props => props.flexWrap || 'no-wrap'};
  align-items: ${props => props.alignItems || 'flex-start'};
  margin: ${props => props.margin || 0};
  padding-top: ${props => props.paddingTop || 0};
  padding-left: ${props => props.paddingLeft || 0};
  padding-bottom: ${props => props.paddingBottom || 0};
  padding-right: ${props => props.paddingRight || 0};
  margin-top: ${props => props.marginTop || 0};
  margin-left: ${props => props.marginLeft || 0};
  margin-bottom: ${props => props.marginBottom || 0};
  margin-right: ${props => props.marginRight || 0};
`;

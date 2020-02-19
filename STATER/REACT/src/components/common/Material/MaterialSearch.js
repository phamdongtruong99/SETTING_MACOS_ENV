import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Input, Icon } from 'antd';

export const StyledMaterialSearch = styled(Input.Search)`
  && {
    .ant-input-suffix {
      display: none;
    }
  }
`;

const MaterialSearch = ({ prefix, placeholder, ...rest }) => (
  <StyledMaterialSearch prefix={prefix} placeholder={placeholder} {...rest} />
);

MaterialSearch.propTypes = {
  prefix: PropTypes.any,
  placeholder: PropTypes.string,
};

MaterialSearch.defaultProps = {
  placeholder: 'Tìm kiếm theo tên',
  prefix: (
    <Icon
      type="search"
      style={{
        color: '#717791',
      }}
    />
  ),
};

export default MaterialSearch;

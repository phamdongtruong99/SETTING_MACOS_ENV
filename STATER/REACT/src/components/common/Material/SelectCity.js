import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';
import { getCitys } from 'utils/city';

const { Option } = Select;

const SelectCity = ({ defaultValue }) => {
  return (
    <Select defaultValue={defaultValue}>
      {getCitys().map(e => (
        <Option key={e.name}>{e.name}</Option>
      ))}
    </Select>
  );
};

SelectCity.propTypes = {
  defaultValue: PropTypes.string,
};

export default SelectCity;

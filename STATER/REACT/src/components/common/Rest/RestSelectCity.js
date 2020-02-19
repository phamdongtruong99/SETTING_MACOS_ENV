/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import { Form, Select } from 'antd';
import PropTypes from 'prop-types';
import { getCitys } from 'utils/city';
import RestForm from './RestForm';

const RestSelectCity = ({ value, label, required, defaultValue, message }) => {
  const { form } = useContext(RestForm);
  return (
    <Form.Item label={label}>
      {form.getFieldDecorator(value, {
        rules: [
          {
            required,
            message,
          },
        ],
        initialValue: defaultValue,
      })(
        <Select>
          {getCitys().map(e => (
            <Select.Option key={e._id}>{e.name}</Select.Option>
          ))}
        </Select>,
      )}
    </Form.Item>
  );
};

RestSelectCity.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.any,
  required: PropTypes.bool,
  message: PropTypes.string,
};

RestSelectCity.defaultProps = {
  required: true,
  message: 'Không được để trống',
};

export default RestSelectCity;

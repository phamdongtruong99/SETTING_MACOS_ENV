import React, { useContext } from 'react';
import { Form, Switch } from 'antd';
import PropTypes from 'prop-types';
import RestForm from './RestForm';

const RestSwitch = ({ value, label, required, defaultValue, message }) => {
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
        valuePropName: 'checked',
      })(<Switch />)}
    </Form.Item>
  );
};

RestSwitch.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.any,
  required: PropTypes.bool,
  message: PropTypes.string,
};

RestSwitch.defaultProps = {
  required: true,
  message: 'Không được để trống',
};

export default RestSwitch;

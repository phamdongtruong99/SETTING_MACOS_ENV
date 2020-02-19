import React, { useContext } from 'react';
import { Form, InputNumber } from 'antd';
import PropTypes from 'prop-types';
import RestForm from './RestForm';

const RestInputNumber = ({ value, label, required, defaultValue, message }) => {
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
      })(<InputNumber />)}
    </Form.Item>
  );
};

RestInputNumber.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.any,
  required: PropTypes.bool,
  message: PropTypes.string,
};

RestInputNumber.defaultProps = {
  required: true,
  message: 'Không được để trống',
};

export default RestInputNumber;

import React, { useContext } from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
import RestForm from './RestForm';

const RestInput = ({
  value,
  label,
  required,
  defaultValue,
  message,
  onChange,
  placeholder,
  pattern,
}) => {
  const { form } = useContext(RestForm);
  return (
    <Form.Item label={label}>
      {form.getFieldDecorator(value, {
        rules: [
          {
            required,
            message,
            pattern,
          },
        ],
        initialValue: defaultValue,
      })(<Input onChange={onChange} placeholder={placeholder} />)}
    </Form.Item>
  );
};

RestInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.any,
  required: PropTypes.bool,
  message: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.any,
  placeholder: PropTypes.string,
};

RestInput.defaultProps = {
  required: true,
  message: 'Không được để trống',
};

export default RestInput;

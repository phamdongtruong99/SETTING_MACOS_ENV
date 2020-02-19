import React, { useContext } from 'react';
import { Form, DatePicker } from 'antd';
import PropTypes from 'prop-types';
import { formatDate } from 'utils/textUtils';
import moment from 'moment';
import RestForm from './RestForm';

const RestDatePicker = ({
  value,
  label,
  required,
  defaultValue,
  message,
  format,
}) => {
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
      })(<DatePicker format={format} />)}
    </Form.Item>
  );
};

RestDatePicker.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.any,
  required: PropTypes.bool,
  message: PropTypes.string,
  format: PropTypes.string,
};

RestDatePicker.defaultProps = {
  required: true,
  format: 'DD/MM/YYYY',
  defaultValue: moment(formatDate(new Date()), 'DD/MM/YYYY'),
  message: 'Không được để trống',
};

export default RestDatePicker;

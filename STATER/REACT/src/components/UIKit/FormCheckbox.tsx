import { Form, Checkbox, Col, Row } from 'antd';
import React, { FC } from 'react';

interface Props {
  name: string;
  label?: string;
  required?: boolean;
  messageRequire?: string;
  onChange?: (_value) => void;
  style?: React.CSSProperties;
  disabled?: boolean;
  records: record[];
}

interface record {
  value: string | string[];
  label: string;
}

const FormCheckbox: FC<Props> = ({
  name,
  label,
  required,
  messageRequire,
  records,
  onChange,
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      valuePropName="checked"
      rules={[
        {
          required,
          message: messageRequire,
        },
      ]}
    >
      <Checkbox.Group>
        <Row gutter={[20, 20]}>
          {records.map((record, index) => (
            <Col span={12} key={String(index)}>
              <Checkbox value={record.value} onChange={onChange}>
                {record.label}
              </Checkbox>
            </Col>
          ))}
        </Row>
      </Checkbox.Group>
    </Form.Item>
  );
};

FormCheckbox.defaultProps = {
  required: true,
};

export default FormCheckbox;

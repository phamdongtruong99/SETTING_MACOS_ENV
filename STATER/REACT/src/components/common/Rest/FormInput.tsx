import { Form, Input } from 'antd'
import { SizeType } from 'antd/lib/config-provider/SizeContext'
import React, { FC } from 'react'

interface Props {
  name: string
  label?: string
  required?: boolean
  messageRequire?: string
  messageValidate?: string
  initialValue?: string
  onChange?: (_value: unknown) => void
  pattern?: RegExp
  placeholder?: string
  style?: React.CSSProperties
  prefix?: React.ReactNode
  type?: string
  addonBefore?: React.ReactNode
  addonAfter?: React.ReactNode
  disabled?: boolean
  size?: SizeType
  rules?: any
}

const FormInput: FC<Props> = ({
  name,
  label,
  required,
  onChange,
  placeholder,
  style,
  prefix,
  type,
  rules,
  addonBefore,
  addonAfter,
  disabled,
  initialValue,
  size
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required
        },
        ...rules
      ]}
      initialValue={initialValue}
    >
      <Input
        disabled={disabled}
        style={{ ...style }}
        onChange={onChange}
        placeholder={placeholder || `Enter ${label}`}
        prefix={prefix}
        type={type}
        size={size}
        addonAfter={addonAfter}
        addonBefore={addonBefore}
      />
    </Form.Item>
  )
}

FormInput.defaultProps = {
  required: false,
  type: 'text'
}

export default FormInput

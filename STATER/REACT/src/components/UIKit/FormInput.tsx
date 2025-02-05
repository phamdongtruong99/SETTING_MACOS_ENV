import React from 'react'
import { Form, Input } from 'antd'
import { SizeType } from 'antd/lib/config-provider/SizeContext'
import { FC } from 'react'

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
  messageVariables?: Record<string, string>
}

const FormInput: FC<Props> = ({
  name,
  label,
  required,
  messageRequire,
  messageValidate,
  onChange,
  placeholder,
  pattern,
  style,
  prefix,
  type,
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
      messageVariables={{ name: label }}
      rules={[
        {
          required
        },
        ...(rules as Rule[])
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

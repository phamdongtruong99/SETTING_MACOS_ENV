import { Button, Form, Modal, Row, Space } from 'antd'
import { Store } from 'antd/lib/form/interface'
import React, { FC } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Props<Values = any> {
  visible: boolean
  onCancel?: () => void
  onFinish?: (values: Values) => void
  loading?: boolean
  title?: string
  initialValues?: Store | undefined
  children: React.ReactNode | React.ReactNode[]
  width?: number
}

const FormModal: FC<Props> = ({ visible, onCancel, onFinish, loading, title, children, initialValues, width }) => {
  const [form] = Form.useForm()
  return (
    <Modal visible={visible} onCancel={onCancel} footer={false} width={width}>
      <p> {title} </p>
      <Form form={form} layout="vertical" onFinish={onFinish} initialValues={initialValues}>
        {React.Children.toArray(children).map((child: React.ReactNode) =>
          React.cloneElement(child as React.ReactElement<unknown>, {
            ...form
          })
        )}
        <Row justify="end">
          <Space size="small">
            <Button size="large" onClick={onCancel}>
              Close
            </Button>
            <Button type="primary" size="large" htmlType="submit" loading={loading}>
              Save
            </Button>
          </Space>
        </Row>
      </Form>
    </Modal>
  )
}

export default FormModal

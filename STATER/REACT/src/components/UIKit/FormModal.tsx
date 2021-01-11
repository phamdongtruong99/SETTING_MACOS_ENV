import { Button, Form, Modal, Row, Space } from 'antd'
import React, { FC } from 'react'

export interface EditTrackingDiviceDto {
  SerNo: string
  OBD: string
  PlantID: string
}

interface Props {
  visible: boolean
  onCancel?: () => void
  onFinish: (e: EditTrackingDiviceDto) => void
  loading?: boolean
  title?: string
  children: React.ReactNode
}

const FormModal: FC<Props> = ({ visible, onCancel, onFinish, loading, title, children }) => {
  const [form] = Form.useForm()
  return (
    <Modal visible={visible} onCancel={onCancel} footer={false}>
      <p> {title} </p>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        {children}
        <Row justify="end">
          <Space size="small">
            <Button size="large" onClick={onCancel} loading={loading}>
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

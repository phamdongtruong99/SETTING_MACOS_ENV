import { Button, Row, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { gutters } from 'utils/tools'
import FormAction from './FormAction'

interface Props<RecordType> {
  dataSource: RecordType[]
  total: number
  loading: boolean
  columns: ColumnsType<RecordType>
  onCreate?: () => void
  onEdit?: (row: unknown) => void
  onDelete?: (id: string) => void
  openCreate?: () => void
  primaryKey?: string
}

function RestTable<RecordType extends {}>({
  dataSource,
  columns,
  total,
  loading,
  onDelete,
  onCreate,
  onEdit,
  primaryKey
}: Props<RecordType>) {
  return (
    <div>
      {onCreate && (
        <Row justify="end" style={{ marginBottom: gutters.md }}>
          <Button type="primary" onClick={onCreate} size="large">
            Create
          </Button>
        </Row>
      )}
      <Table
        rowKey={primaryKey}
        dataSource={dataSource}
        columns={[
          ...columns,
          {
            key: 'action',
            width: '10%',
            render: row => (
              <FormAction
                onEdit={() => onEdit?.(row)}
                onDelete={() => {
                  onDelete?.(row[primaryKey as string])
                }}
              />
            )
          }
        ]}
        pagination={{
          total: total,
          showQuickJumper: true,
          showSizeChanger: true
        }}
        loading={loading}
      />
    </div>
  )
}

RestTable.defaultProps = {
  primaryKey: 'ID'
}

export default RestTable

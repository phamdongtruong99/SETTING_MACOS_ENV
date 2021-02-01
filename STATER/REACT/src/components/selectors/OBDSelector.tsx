import { Select } from 'antd'
import { useGetAllObdDevicesLazyQuery } from 'graphql/queries/autogenerate/hooks'
import { ObdDevice } from 'graphql/schemas'
import React, { FC } from 'react'
import { convertDataToSelectOptions } from 'utils/tools'

interface Props {
  style?: React.CSSProperties
  onChange?: (projectID: string) => void
  value?: string
  onSelect?: (value: ObdDevice | undefined) => void
}

const OBDSelector: FC<Props> = ({ style, onChange, value, onSelect }) => {
  const [getOBD, { data, loading }] = useGetAllObdDevicesLazyQuery()
  const devices = data?.getAllObdDevices as ObdDevice[]
  return (
    <Select
      value={value}
      style={style}
      placeholder="Pleact select OBD"
      showSearch
      loading={loading}
      onChange={onChange}
      onSelect={value => onSelect?.(devices.find((e: ObdDevice) => e.ID === value))}
      options={convertDataToSelectOptions(devices, 'ID', 'SerNo')}
      optionFilterProp="label"
      size="large"
      onClick={() => getOBD()}
    />
  )
}

export default OBDSelector

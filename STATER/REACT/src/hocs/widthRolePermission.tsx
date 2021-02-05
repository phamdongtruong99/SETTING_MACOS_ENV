import FormModal from 'components/common/FormModal'
import SwitchJob from 'containers/SwitchJob'
import { AppContext } from 'contexts/app'
import { Store } from 'rc-field-form/lib/interface'
import React, { useContext, useState } from 'react'
import { showError } from 'utils/tools'

const widthRolePermission = <P extends object>(Component: React.ComponentType<P>) => (props: P) => {
  const [havePermission, setHavePermission] = useState(false)
  const { hasProjectRole, hasGlobalRole, changeProjectID } = useContext(AppContext)

  const onFinish = (values: Store) => {
    const havePermission =
      hasProjectRole(values.ProjectID, ['ProjectManager', 'ProjectSupervisor', 'ProjectDirector']) ||
      hasGlobalRole(['PlantAdministrator'])
    if (!havePermission) {
      return showError(new Error('You don"t have permission to access this feature!'))
    }
    changeProjectID(values.ProjectID, values.projectType)
    localStorage.setItem(`projectID_${values.projectType}`, values.ProjectID)
    setHavePermission(true)
  }

  if (!havePermission)
    return (
      <FormModal onFinish={onFinish} visible={true} width={600}>
        <SwitchJob />
      </FormModal>
    )
  return (
    <div>
      <Component {...props} />
    </div>
  )
}

export default widthRolePermission


import React from 'react'
import { Resources } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminRoleItem } from '../../../containers'

const AdminRolesList: React.FC = () => {

  const { apiUrl } = useAdmin()

  return(
    <Resources
      sortable
      url={`${apiUrl}/roles`}
      name="role"
      enableCreate
      enableEdit
      enableSearch
      enableDelete
      query={{
        sort_by: 'position',
        sort_direction: 'asc',
      }}
      fields={[
        {
          label: 'Label',
          name: 'label',
          variant: 'string',
          placeholder: 'Label',
        },
        {
          label: 'API name',
          name: 'name',
          variant: 'nospace',
          placeholder: 'Name',
        },
      ]}
      component={AdminRoleItem}
      emptyIcon="Users"
      emptyTitle="No roles"
      emptyDescription="No user roles yet."
    />
  )
}

export default AdminRolesList
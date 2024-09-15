import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'
import { useAdmin } from '../../../hooks'
import { MetafieldType } from '../../../types'

type AdminUserFormProps = ResourceFormProps & {
	metafields?: MetafieldType[]
}

const AdminUserForm: React.FC<AdminUserFormProps> = (props) => {
	const { apiUrl } = useAdmin()

	const fields = [
		{
			label: 'First name',
			name: 'first_name',
			variant: 'string',
		},
		{
			label: 'Last name',
			name: 'last_name',
			variant: 'string',
		},
		{
			label: 'Username',
			name: 'username',
			variant: 'nospaces',
		},
		{
			label: 'Email',
			name: 'email',
			variant: 'string',
			conditions: [{ name: 'id', operator: 'eq', value: undefined }],
		},
		{
			label: 'Role',
			name: 'role',
			variant: 'select',
			options: [
				{ label: 'User', value: 'user' },
				{ label: 'Admin', value: 'admin' },
			],
		},
		{
			label: 'Paid',
			name: 'paid',
			variant: 'boolean',
		},
	]

	return <ResourceForm {...props} fields={fields} />
}

export default AdminUserForm

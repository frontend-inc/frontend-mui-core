'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminContactItem } from '../..'
import AdminContactForm from './AdminContactForm'

const AdminContactList: React.FC = () => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			enableBorder={false}
			url={`${apiUrl}/contacts`}
			name="contact"
			enableSearch
			enableCreate
			enableEdit
			enableShow
			enableDelete
			filterOptions={[
				{
					field: 'source',
					label: 'Source',
					variant: 'multiple_choice',
					options: [
						{ label: 'Newsletter', value: 'newsletter' },
						{ label: 'Contact Us', value: 'contact' },
						{ label: 'Form', value: 'form' },
					],
				},
			]}
			sortOptions={[
				{ name: 'created_at', label: 'Date' },
				{ name: 'name', label: 'Name' },
				{ name: 'email', label: 'Email' },
				{ name: 'phone', label: 'Phone' },
				{ name: 'company', label: 'Company' },
			]}
			displayFields={[
				{ name: 'name', label: 'Name', variant: 'string' },
				{ name: 'email', label: 'Email', variant: 'string' },
				{ name: 'phone', label: 'Phone', variant: 'string' },
				{ name: 'company', label: 'Company', variant: 'string' },
				{ name: 'reason', label: 'Reason', variant: 'string' },
				{ name: 'source', label: 'Source', variant: 'string' },
				{ name: 'message', label: 'Message', variant: 'text' },
				{
					name: 'accepts_marketing',
					label: 'Accepts marketing',
					variant: 'boolean',
				},
			]}
			edit={AdminContactForm}
			create={AdminContactForm}
			component={AdminContactItem}
		/>
	)
}

export default AdminContactList

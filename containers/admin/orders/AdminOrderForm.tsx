'use client'

import React from 'react'
import { ResourceForm, UserAutosuggest } from '../../../components'
import { ORDER_STATES } from '../../../constants'

type AdminOrderFormProps = {
	open: boolean
	handleClose: () => void
	loading: boolean
	errors: any
	resource: any
	setResource: (resource: any) => void
	handleChange: (ev: any) => void
	handleRemove?: (string: any) => void
	handleAddAttachment?: (name: string, attachmentId: number) => void
	handleRemoveAttachment?: (name: string) => void
	handleSubmit: () => void
	handleReload: () => void
	inputOptions?: Record<string, React.FC>
	inputParams?: Record<string, any>
}

const AdminOrderForm: React.FC<AdminOrderFormProps> = (props) => {
	let fields = [
		{ label: 'User', name: 'user_id', variant: 'user' },
		{
			label: 'Status',
			name: 'status',
			variant: 'select',
			options: ORDER_STATES,
		},
		{ label: 'Customer Name', name: 'customer_name', variant: 'string' },
		{ label: 'Email', name: 'customer_email', variant: 'string' },
		{ label: 'Phone', name: 'customer_phone', variant: 'string' },
		{ label: 'Address Line 1', name: 'address1', variant: 'string' },
		{ label: 'Address Line 2', name: 'address2', variant: 'string' },
		{ label: 'City', name: 'city', variant: 'string' },
		{
			label: 'State',
			name: 'state',
			variant: 'state',
			conditions: [{ name: 'country', operator: 'eq', value: 'US' }],
		},
		{ label: 'Country', name: 'country', variant: 'country' },
		{ label: 'Zipcode', name: 'zipcode', variant: 'string' },
	]

	const inputOptions = {
		user: UserAutosuggest,
	}

	return <ResourceForm {...props} fields={fields} inputOptions={inputOptions} />
}

export default AdminOrderForm

'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

const AdminShipmentForm: React.FC<ResourceFormProps> = (props) => {
	return (
		<ResourceForm
			{...props}
			fields={[
				{
					label: 'Carrier',
					name: 'carrier',
					variant: 'select',
					placeholder: 'Select carrier',
					options: [
						{ label: 'DHL', value: 'dhl' },
						{ label: 'FedEx', value: 'fedex' },
						{ label: 'UPS', value: 'ups' },
						{ label: 'USPS', value: 'usps' },
						{ label: 'Other', value: 'other' },
					],
				},
				{
					label: 'Tracking code',
					name: 'tracking_code',
					variant: 'string',
					placeholder: 'Tracking Code',
				},
				{
					label: 'Delivery status',
					name: 'status',
					variant: 'select',
					options: [
						{ label: 'Shipped', value: 'pending' },
						{ label: 'Delivered', value: 'delivered' },
					],
				},
			]}
		/>
	)
}

export default AdminShipmentForm

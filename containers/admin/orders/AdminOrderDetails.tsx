'use client'

import React, { useEffect } from 'react'
import { Button } from '../../../tailwind'
import { Typography } from '../../../tailwind'
import { Icon, UserChip, Label, PrimaryButton } from '../../../components'
import { OrderType } from '../../../types'
import copy from 'copy-to-clipboard'
import { useAlerts } from '../../../hooks'

type AdminOrderDetailsProps = {
	loading?: boolean
	order: OrderType
	handleEdit: () => void
}

const AdminOrderDetails: React.FC<AdminOrderDetailsProps> = (props) => {
	const { order, handleEdit, loading } = props || {}

	const { showAlertSuccess, showAlertError } = useAlerts()

	const handleCopyEmail = () => {
		if (order.customer_email) {
			copy(order.customer_email)
			showAlertSuccess('Email copied to clipboard')
		} else {
			showAlertError('No email to copy')
		}
	}

	return (
		<div className={`grid grid-cols-2 gap-4 ${loading ? 'opacity-50' : ''}`}>
			<div className="flex flex-row space-x-1">
				<Typography variant="subtitle1" color="text.primary">
					Order {order.display_number}
				</Typography>
				<Label label={order?.status} />
			</div>
			<div className="flex justify-end items-start">
				<PrimaryButton onClick={handleEdit}>Edit</PrimaryButton>
			</div>
			<div className="bg-white p-4 rounded-lg shadow">
				<div className="flex flex-col">
					<div className="flex justify-start items-center pb-1 border-b border-gray-200">
						<UserChip user={order?.user} size={44} enableUsername enableEmail />
					</div>
					<div>
						<Button
							startIcon={<Icon name="Mail" size={20} />}
							className="mt-1 p-0.5 text-primary"
							onClick={handleCopyEmail}
						>
							{order.customer_name}
						</Button>
					</div>
					<Typography
						variant="overline"
						color="text.secondary"
						className="whitespace-pre-line"
					>
						{order.shipping_address}
					</Typography>
				</div>
			</div>
			<div className="bg-white p-4 rounded-lg shadow">
				<div className="flex flex-col">
					<Typography variant="overline" color="text.secondary">
						Subtotal: {order.display_subtotal}
					</Typography>
					<Typography variant="overline" color="text.secondary">
						Taxes: {order.total_amount}
					</Typography>
					<Typography variant="overline" color="text.secondary">
						Discounts: {order.discount_amount}
					</Typography>
					<Typography variant="overline" color="text.secondary">
						Shipping: {order.shipping_amount}
					</Typography>
					<Typography variant="overline" color="text.secondary">
						Total: {order.display_total}
					</Typography>
				</div>
			</div>
		</div>
	)
}

export default AdminOrderDetails

'use client'

import React, { useEffect } from 'react'
import { AuthScreen, Loader } from '../../../components'
import { useOrders } from 'frontend-shopify'
import { ShopifyOrderList } from '../../../components/shopify'
import { useApp } from '../../../hooks'
import { useRouter, useParams } from 'next/navigation'
import { getShopifyIdFromGid } from 'frontend-shopify'

type ShopifyCustomerOrdersProps = {
	title?: string
	subtitle?: string
}

const ShopifyCustomerOrders: React.FC<ShopifyCustomerOrdersProps> = (props) => {
	const router = useRouter()

	const { clientUrl } = useApp()

	const { title = 'Customer Orders', subtitle = 'Manage your orders' } =
		props || {}

	const { loading, orders, findCustomerOrders } = useOrders()

	const handleClick = (order) => {
		let orderId = getShopifyIdFromGid(order?.id)
		router.push(`${clientUrl}/shopify/orders/${orderId}`)
	}

	useEffect(() => {
		if (!orders) {
			findCustomerOrders({
				first: 20,
			})
		}
	}, [orders])

	return (
		<>
			<Loader loading={loading} />
			<AuthScreen title={title} subtitle={subtitle}>
				<ShopifyOrderList orders={orders} handleClick={handleClick} />
			</AuthScreen>
		</>
	)
}

export default ShopifyCustomerOrders

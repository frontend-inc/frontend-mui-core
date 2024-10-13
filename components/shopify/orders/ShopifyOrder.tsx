'use client'

import React, { useEffect, useContext } from 'react'
import { AuthScreen, Loader } from '../..'
import { useOrders } from 'frontend-shopify'
import { ShopifyOrderDetails } from '..'
import { useParams } from 'next/navigation'
import moment from 'moment'

type ShopifyOrderRouterParams = {
	order_id: string | null
}

type ShopifyCustomerOrderProps = {
	title?: string
	subtitle?: string
}

const ShopifyCustomerOrder: React.FC<ShopifyCustomerOrderProps> = (props) => {
	
  let { order_id: orderId } = useParams() as any

	if (orderId == 'new') {
		orderId = null
	}

	const { loading, order, findCustomerOrder } = useOrders()

	useEffect(() => {
		if (orderId) {
			findCustomerOrder(orderId)
		}
	}, [orderId])

	return (
		<>
			<Loader loading={loading} />
			<AuthScreen
				title={`Order ${order.name}`}
				subtitle={moment(order?.processedAt).format('MMMM Do, YYYY')}
			>
				<ShopifyOrderDetails order={order} />
			</AuthScreen>
		</>
	)
}

export default ShopifyCustomerOrder

'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '../../../shadcn/ui/button'
import { ScrollArea } from '../../../shadcn/ui/scroll-area'
import {
	ShopifyAddressItem,
	ShopifyOrderLineItem,
} from '../../../components/shopify'
import { formatCurrency } from 'frontend-shopify'
import { ShopifyOrderType, OrderLineItemType } from 'frontend-shopify'
import { ExternalLink } from 'lucide-react'
import { useRouter, useParams } from 'next/navigation'
import { cn } from '../../../shadcn/lib/utils'

type ShopifyOrderDetailsProps = {
	className?: string
	order: ShopifyOrderType
	supportUrl?: string
}

const ShopifyOrderDetails: React.FC<ShopifyOrderDetailsProps> = (props) => {
	const router = useRouter()
	const { order, supportUrl, className } = props

	const [lineItems, setListItems] = useState<OrderLineItemType[]>()

	const handleOrderStatusClick = () => {
		window.open(order?.statusUrl, '_blank')
	}

	const handleSupportClick = () => {
		if (supportUrl) {
			router.push(supportUrl)
		}
	}

	useEffect(() => {
		if (order) {
      // @ts-ignore
			setListItems(order?.lineItems?.edges.map((e) => e.node))
		}
	}, [order])

	const { shippingAddress } = order || {}

	return (
		<div className={cn('flex flex-col space-y-4', className)}>
			<h3 className="text-lg font-semibold">Order details</h3>
			<ScrollArea className="h-[200px] w-full rounded-md border p-4">
				{lineItems?.map((lineItem, i) => (
					<ShopifyOrderLineItem key={i} lineItem={lineItem} />
				))}
			</ScrollArea>
			<div className="flex justify-between items-center">
				<span className="text-sm">Shipping</span>
				<span className="text-sm font-medium">
					{formatCurrency(order?.totalShippingPrice?.amount, 2)}
				</span>
			</div>
			<div className="flex justify-between items-center">
				<span className="text-sm font-semibold">Total</span>
				<span className="text-sm font-semibold">
					{formatCurrency(order?.totalPrice?.amount, 2)}
				</span>
			</div>
			{shippingAddress && (
				<>
					<h3 className="text-lg font-semibold">Shipping Details</h3>
          
					<ShopifyAddressItem 
            disableActions 
            // @ts-ignore
            address={shippingAddress} 
          />
				</>
			)}
			<Button
				className="w-full"
				variant="default"
				onClick={handleOrderStatusClick}
			>
				Order status
				<ExternalLink className="ml-2 h-4 w-4" />
			</Button>
			{supportUrl && (
				<Button
					className="w-full"
					variant="outline"
					onClick={handleSupportClick}
				>
					Customer support
				</Button>
			)}
		</div>
	)
}

export default ShopifyOrderDetails

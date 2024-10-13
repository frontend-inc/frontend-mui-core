'use client'

import React from 'react'
import { Badge } from '../../../shadcn/ui/badge'
import { Image } from '../../../components'
import { formatCurrency } from 'frontend-shopify'
import { OrderLineItemType } from 'frontend-shopify'
import { cn } from '../../../shadcn/lib/utils'

type ShopifyOrderLineItemProps = {
	lineItem: OrderLineItemType
	className?: string
}

const ShopifyOrderLineItem: React.FC<ShopifyOrderLineItemProps> = ({
	lineItem,
	className,
}) => {
	return (
		<div className={cn('flex items-start space-x-4 py-2', className)}>
			<div className="relative flex-shrink-0">
				{lineItem?.variant?.image?.url && (
					<div className="relative">
						<Image
							height={100}
							width={100}
							src={lineItem.variant.image.url}
							alt={lineItem.title}
							className="rounded-md object-cover"
						/>
						<Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
							{lineItem.quantity}
						</Badge>
					</div>
				)}
			</div>
			<div className="flex-grow">
				<h4 className="text-sm font-medium">{lineItem.title}</h4>
				<p className="text-sm text-muted-foreground">
					{lineItem?.variant?.title}
				</p>
				<p className="text-sm text-muted-foreground">
					{lineItem.quantity} x{' '}
					{formatCurrency(lineItem?.variant?.price?.amount)}
				</p>
			</div>
		</div>
	)
}

export default ShopifyOrderLineItem

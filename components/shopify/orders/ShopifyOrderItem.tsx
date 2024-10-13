import React from 'react'
import { Button } from '../../../shadcn/ui/button'
import { Image } from '../../../components'
import { formatCurrency } from 'frontend-shopify'
import moment from 'moment'
import { ShopifyOrderType } from 'frontend-shopify'
import { cn } from '../../../shadcn/lib/utils'

type ShopifyOrderItemProps = {
	order: ShopifyOrderType
	handleClick: (order: ShopifyOrderType) => void
	className?: string
}

const ShopifyOrderItem: React.FC<ShopifyOrderItemProps> = ({
	order,
	handleClick,
	className,
}) => {
	return (
		<Button
			variant="ghost"
			className={cn(
				'w-full justify-start text-left hover:bg-accent',
				className
			)}
			onClick={() => handleClick(order)}
		>
			<div className="flex items-center space-x-4">
				<div className="flex-shrink-0">
					<Image
						alt={order?.name || 'Order image'}
						src={
              //@ts-ignore
							order?.lineItems?.edges[0]?.node?.variant?.image?.url ||
							'/placeholder.svg'
						}
						width={64}
						height={64}
						className="rounded-md object-cover"
					/>
				</div>
				<div className="flex-grow">
					<h3 className="text-base font-semibold mb-1">Order {order?.name}</h3>
					<div className="text-sm text-muted-foreground">
						<p>{moment(order?.processedAt).format('MM/DD/YYYY')}</p>
						<p>{formatCurrency(order?.totalPrice?.amount)}</p>
					</div>
				</div>
			</div>
		</Button>
	)
}

export default ShopifyOrderItem

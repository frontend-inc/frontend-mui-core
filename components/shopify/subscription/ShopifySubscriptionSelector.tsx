'use client'

import React, { useEffect, useState } from 'react'
import { getSellingPlanDescription } from 'frontend-shopify'
import { ShopifyProductType } from 'frontend-shopify'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../../../shadcn/ui/select'

type ShopifySubscriptionSelectorProps = {
	product: ShopifyProductType
	handleChange: (value: string) => void
	activeSellingPlanId?: string
}

const ShopifySubscriptionSelector: React.FC<
	ShopifySubscriptionSelectorProps
> = (props) => {
	const { product, activeSellingPlanId = '', handleChange } = props
	const [sellingPlans, setSellingPlans] = useState<any[]>([])

	useEffect(() => {
		if (product) {
			const subscriptions =
        //@ts-ignore
				product?.sellingPlanGroups?.edges[0]?.node?.sellingPlans?.edges?.map(
					({ node }: any) => node
				) || []
			setSellingPlans(subscriptions)
		}
	}, [product])

	if (!sellingPlans || sellingPlans.length === 0) return null

	return (
		<div className="w-full">
			<Select onValueChange={handleChange} value={activeSellingPlanId}>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Select a subscription" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="">
						<span className="text-foreground italic">No subscription</span>
					</SelectItem>
					{sellingPlans.map((sellingPlan) => (
						<SelectItem key={sellingPlan.id} value={sellingPlan.id}>
							{sellingPlan?.name} - {getSellingPlanDescription(sellingPlan)}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}

export default ShopifySubscriptionSelector

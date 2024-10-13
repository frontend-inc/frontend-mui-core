'use client'

import React from 'react'
import { Button } from '../../../shadcn/ui/button'
import { Plus, Minus } from 'lucide-react'
import { cn } from '../../../shadcn/lib/utils'

type ShopifyQuantitySelectorProps = {
	quantity: number
	handleAddQuantity: () => void
	handleRemoveQuantity: () => void
}

export default function ShopifyQuantitySelector({
	quantity,
	handleAddQuantity,
	handleRemoveQuantity,
}: ShopifyQuantitySelectorProps) {
	const buttonClasses = cn(
		'w-[32px] p-0 min-w-[32px]',
		'w-full text-secondary-foreground border-secondary'
	)

	return (
		<div className="inline-flex min-w-[96px] rounded-md shadow-sm" role="group">
			<Button
				variant="secondary"
				className={cn(buttonClasses, 'rounded-r-none border-r-0')}
				onClick={handleRemoveQuantity}
			>
				<Minus className="h-5 w-5" />
			</Button>
			<Button
				variant="secondary"
				className={cn(buttonClasses, 'rounded-none border-x')}
			>
				{quantity}
			</Button>
			<Button
				variant="secondary"
				className={cn(buttonClasses, 'rounded-l-none border-l-0')}
				onClick={handleAddQuantity}
			>
				<Plus className="h-5 w-5" />
			</Button>
		</div>
	)
}

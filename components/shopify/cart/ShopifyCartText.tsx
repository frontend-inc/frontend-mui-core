import React from 'react'
import { Typography } from '../../../tailwind'

type ShopifyCartTextProps = {
	label: string
	value: string
	icon?: string
}

export default function ShopifyCartText({
	label,
	value,	
}: ShopifyCartTextProps) {
	return (
		<div className="flex flex-row justify-between w-full">
			<Typography variant="body1" color="text.secondary">
				{label}
			</Typography>
			<Typography variant="body1">{value}</Typography>
		</div>
	)
}

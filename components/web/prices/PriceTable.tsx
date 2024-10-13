'use client'

import React from 'react'
import PriceTableCard from './PriceTableCard'
import { PriceType } from '../../..'
import { Placeholder } from '../..'

export type PriceTableProps = {
	items: PriceType[]
}

const PriceTable: React.FC<PriceTableProps> = (props) => {
	const { items } = props

	return (
		<div className="flex flex-col space-y-2">
			<div className="flex sm:flex-row flex-col space-y-1 sm:space-y-0 sm:space-x-1">
				{items?.map((item, index) => (
					<PriceTableCard
						key={index}
						label={item.label}
						title={item.title}
						price={item.price}
						description={item.description}
						features={item.features || []}
					/>
				))}
			</div>
			{items?.length === 0 && (
				<Placeholder
					icon="CreditCard"
					title="No subscription plans"
					description="Subscription plans will appear here."
				/>
			)}
		</div>
	)
}

export default PriceTable

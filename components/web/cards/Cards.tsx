'use client'

import React from 'react'
import { Card, Placeholder } from '../..'
import { useRouter, useParams } from 'next/navigation'

type CardType = {
	label?: string
	title: string
	description: string
	image: string
	buttonText?: string
	path?: string
	url?: string
}

export type CardsProps = {
	style?: 'card' | 'cover'
	items: CardType[]
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const Cards: React.FC<CardsProps> = (props) => {
	const router = useRouter()

	const { items, enableGradient, enableOverlay } = props || {}

	const handleClick = (card: CardType) => {
		if (card?.path) {
			router.push(card.path)
		}
	}

	return (
		<div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{items?.map((item, i) => (
					<div key={i}>
						<Card
							image={item?.image}
							primary={item?.title}
							secondary={item?.description}
							handleClick={() => handleClick(item)}
							slots={{
								image: {
									enableGradient,
									enableOverlay,
								},
							}}
						/>
					</div>
				))}
			</div>
			{items?.length == 0 && (
				<Placeholder
					icon="Search"
					title="No content yet."
					description="Your content will appear here."
				/>
			)}
		</div>
	)
}

export default Cards

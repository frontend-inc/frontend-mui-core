import React from 'react'
import { Box, Grid } from '@mui/material'
import { SimpleCard, Placeholder } from '../..'
import { useRouter } from 'next/router'

type CardType = {
	label?: string
	title?: string
	description: string
	image: string
	buttonText?: string
	url?: string
}

export type SimpleCardsProps = {
	style?: 'card' | 'cover'
	items: CardType[]
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const SimpleCards: React.FC<SimpleCardsProps> = (props) => {
	const router = useRouter()

	const {
		items,
		enableGradient,
		enableOverlay,
	} = props || {}

	const handleClick = (card: CardType) => {
		if (card?.url) {
			router.push(card.url)
		}
	}

	return (
		<Box>
			<Grid container spacing={2}>
				{items?.map((card, i) => (
					<Grid item xs={12} sm={4} md={4} key={i}>
						<SimpleCard
							item={{
								...card,
								image: {
									url: card?.image,
								},
							}}
							handleClick={() => handleClick(card)}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
						/>
					</Grid>
				))}
			</Grid>
			{items?.length == 0 && (
				<Placeholder
					icon="Search"
					title="No content yet."
					description="Your content will appear here."
				/>
			)}
		</Box>
	)
}

export default SimpleCards
'use client'

import React from 'react'
import { Typography } from '../../../tailwind'
import { ButtonActions, SpotlightList, SpotlightCard } from '../..'
import { ButtonType } from '../../../types'

export type SpotlightProps = {
	label?: string
	title?: string
	description?: string
	image?: string
	logos: {
		image: string
		title: string
	}[]
	style?: 'card' | 'list'
	buttons?: ButtonType[]
}

const Spotlight: React.FC<SpotlightProps> = (props) => {
	const {
		style = 'list',
		image,
		label,
		title,
		description,
		logos = [],
		buttons = [],
	} = props || {}

	const Component =
		{
			list: SpotlightList,
			card: SpotlightCard,
		}[style] || SpotlightList

	return (
		<Component
			label={label}
			primary={title}
			secondary={
				description && (
					<Typography variant="subtitle1" color="text.secondary">
						{description}
					</Typography>
				)
			}
			actions={buttons?.length > 0 && <ButtonActions buttons={buttons} />}
			logos={logos}
			image={image}
		/>
	)
}

export default Spotlight

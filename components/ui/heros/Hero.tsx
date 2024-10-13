'use client'

import React from 'react'
import {
	HeroAvatar,
	HeroCard,
	HeroCover,
	HeroList,
	ButtonActions,
} from '../../../components'
import { Typography } from '../../../tailwind'
import { ButtonType } from '../../../types'

export type HeroProps = {
	title?: string
	description?: string
	image?: string
	style?: 'card' | 'cover' | 'list' | 'avatar' | 'spotlight'
	buttons?: ButtonType[]
}

const Hero: React.FC<HeroProps> = (props) => {
	const {
		title,
		description,
		image,
		style = 'card',
		buttons = [],
	} = props || {}

	const Component =
		{
			card: HeroCard,
			cover: HeroCover,
			list: HeroList,
			avatar: HeroAvatar,
		}[style] || HeroList

	return (
		<Component
			primary={title}
			secondary={
				<Typography variant="body1" color="text.secondary">
					{description}
				</Typography>
			}
			image={image}
			secondaryAction={
				buttons && <ButtonActions buttons={buttons} />
			}
		/>
	)
}

export default Hero

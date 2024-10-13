import React from 'react'
import { Container, Stack, Typography } from '../../../tailwind'
import { Image } from '../..'
import { HeroCardProps } from './HeroCard'

const HeroList: React.FC<HeroCardProps> = (props) => {
	const {
		image,
		label,
		primary,
		secondary,
		actions,
		secondaryAction,
		children,
		slots = {
			image: {},
		},
	} = props || {}

	return (
		<Container maxWidth="lg">
			<Stack className="w-full justify-start items-center space-y-6">
				{secondaryAction}
				<Typography color="text.primary" variant="h3">
					{primary}
				</Typography>
				<div className="w-full rounded py-10">
					<Image
						src={image}
						alt={primary}
						height={400}
						label={label}
						{...slots.image}
					/>
				</div>
				{actions}
				<div className="w-full max-w-[500px] sm:max-w-full">{secondary}</div>
				{children}
			</Stack>
		</Container>
	)
}

export default HeroList

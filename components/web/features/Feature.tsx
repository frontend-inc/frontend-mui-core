'use client'

import React from 'react'
import { Icon } from '../..'
import { Avatar, Stack, Typography } from '../../../tailwind'

type FeatureProps = {
	icon?: string
	title?: string
	description?: string
	enableBorder?: boolean
}

const Feature: React.FC<FeatureProps> = (props) => {
	const { icon, title, description } = props || {}
	return (
		<Stack direction="column" spacing={2} alignItems="center">
			{icon && (
				<Avatar>
					<Icon name={icon} color="primary.main" />
				</Avatar>
			)}
			<Stack direction="column" spacing={1} alignItems="center">
				<Typography variant="subtitle1">
					{title}
				</Typography>
				<Typography className="text-muted-foreground"variant="body1">
					{description}
				</Typography>
			</Stack>
		</Stack>
	)
}

export default Feature

'use client'

import React from 'react'
import { Typography } from '../../../tailwind'
import { ButtonType, TypographyVariantsType } from '../../../types'
import { ButtonActions } from '../..'

export type CallToActionProps = {
	label?: string
	title: string
	description: string
	textVariant?: TypographyVariantsType
	buttons: ButtonType[]
	direction?: string
}

// Call To Action
const CallToAction: React.FC<CallToActionProps> = (props) => {
	const { label, title, description, buttons } = props || {}

	return (
		<div className="w-full">
			<div className="flex flex-col items-center space-y-2">
				{label && (
					<Typography className="text-muted-foreground"variant="caption">
						{label}
					</Typography>
				)}
				{title && (
					<Typography variant={'h3'} >
						{title}
					</Typography>
				)}
				{description && (
					<Typography variant="subtitle2" className="text-muted-foreground">
						{description}
					</Typography>
				)}
				{buttons?.length > 0 && (
					<div>
						<ButtonActions							
							buttons={buttons}
							size="large"
							justifyContent="center"
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default CallToAction

import React from 'react'
import { Box, Stack, Typography } from '../../../tailwind'
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
		<Box className="w-full">
			<Stack alignItems="center" direction="column" spacing={1}>
				{label && (
					<Typography color="text.secondary" variant="caption">
						{label}
					</Typography>
				)}
				{title && (
					<Typography variant={'h3'} color="text.primary">
						{title}
					</Typography>
				)}
				{description && (
					<Typography variant="subtitle2" color="text.secondary">
						{description}
					</Typography>
				)}
				{buttons?.length > 0 && (
					<Stack direction="row" spacing={1}>
						<ButtonActions
							resource={[]}
							buttons={buttons}
							size="large"
							justifyContent="center"
						/>
					</Stack>
				)}
			</Stack>
		</Box>
	)
}

export default CallToAction

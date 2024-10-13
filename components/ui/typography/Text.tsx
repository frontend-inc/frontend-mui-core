import React from 'react'
import { Container, Stack, Typography } from '../../../tailwind'
import { Heading } from '../..'
import { TypographyVariantsType } from '../../../types'

export type TextProps = {
	title: string
	description: string
	label?: string
	textAlign?: 'center' | 'left'
	textVariant?: TypographyVariantsType
	html?: boolean
}

// Call To Action
const Text: React.FC<TextProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		textVariant,
		html = false,
	} = props || {}

	return (
		<Container maxWidth="lg">
			<Stack spacing={2} direction="column">
				<Heading
					label={label}
					title={title}
					textAlign={textAlign}
					textVariant={textVariant}
				/>
				{html ? (
					<Typography variant="body1">
						<div dangerouslySetInnerHTML={{ __html: description }} />
					</Typography>
				) : (
					<Typography variant="body1">{description}</Typography>
				)}
			</Stack>
		</Container>
	)
}

export default Text

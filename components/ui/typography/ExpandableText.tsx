'use client'

import React, { useState } from 'react'
import { Stack, Typography, Link } from '../../../tailwind'
import { TypographyVariantsType } from '../../../types'

const MAX_CHARS = 200

type ExpandableTextProps = {
	text: string
	variant?: TypographyVariantsType
	maxChars?: number
	color?: string
}

const ExpandableText: React.FC<ExpandableTextProps> = (props) => {
	const {
		text,
		color = 'text.primary',
		variant = 'body1',
		maxChars = MAX_CHARS,
	} = props || {}
	const [open, setOpen] = useState(false)
	return (
		<Stack direction="column" spacing={0}>
			{open ? (
				<Typography variant={variant}>{text}</Typography>
			) : (
				<Typography variant={variant}>{text?.slice(0, maxChars)}</Typography>
			)}
			{text?.length > maxChars && (
				<Link href="#" onClick={() => setOpen(!open)}>
					{open ? 'See less' : '... See all'}
				</Link>
			)}
		</Stack>
	)
}

export default ExpandableText

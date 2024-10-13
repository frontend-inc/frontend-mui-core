'use client'

import React from 'react'
import { Typography } from '../../../../tailwind'

type HelperTextProps = {
	text?: string
}

const HelperText: React.FC<HelperTextProps> = (props) => {
	const { text } = props || {}
	if (!text) return null
	return <Typography variant="caption">{text}</Typography>
}

export default HelperText

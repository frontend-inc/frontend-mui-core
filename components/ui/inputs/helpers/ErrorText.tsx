'use client'

import React from 'react'
import { Typography } from '../../../../tailwind'

type ErrorTextProps = {
	error?: string
}

const ErrorText: React.FC<ErrorTextProps> = (props) => {
	const { error } = props

	if (!error) return null
	return (
		<Typography variant="overline" className="text-destructive">
			{error}
		</Typography>
	)
}

export default ErrorText

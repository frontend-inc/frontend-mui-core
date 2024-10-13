'use client'

import React from 'react'
import { Badge } from '../../shadcn/ui/badge'

type LabelProps = {
	label?: string
	variant?: 'default' | 'secondary' | 'destructive' | 'outline'
	className?: string
}

const Label: React.FC<LabelProps> = (props) => {
	const { label, variant, className } = props

	if (!label) return null
	return (
		<Badge variant={variant} className={className}>
			{label}
		</Badge>
	)
}

export default Label

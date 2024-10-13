'use client'

import React from 'react'
import { Icon } from '../../../components'
import { FIELD_VARIANTS } from '../../../constants'
import { cn } from '../../../shadcn/lib/utils'

type FieldIconProps = {
	size?: number
	variant: string
}

const FieldIcon: React.FC<FieldIconProps> = ({ variant, size = 36 }) => {
	const field = FIELD_VARIANTS.find((f) => f.variant === variant)

	return (
		<div
			className={cn(
				field?.color,
				'p-[5px] mr-1 rounded-lg flex items-center justify-center'
			)}
			style={{
				width: `${size}px`,
				height: `${size}px`,
			}}
		>
			<Icon name={field?.icon} />
		</div>
	)
}

export default FieldIcon

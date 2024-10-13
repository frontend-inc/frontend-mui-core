'use client'

import React from 'react'
import { Icon } from '../../../components'
import { cn } from '../../../shadcn/lib/utils'

type FieldWrapperProps = {
	direction?: 'row' | 'column'
	label?: string
	icon?: string
	color?: string
	alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
	disableLabel?: boolean
	children?: React.ReactNode
	className?: string
}

const FieldWrapper: React.FC<FieldWrapperProps> = (props) => {
	const {
		direction = 'column',
		label,
		icon,
		color = 'text-muted-foreground',
		children,
		disableLabel,
		className,
	} = props || {}

	const wrapperClasses = cn(
		'w-full',
		direction === 'row' && 'flex-row',
		direction === 'column' && 'flex-col',
		className
	)

	return (
		<div className={wrapperClasses}>
			{!disableLabel && label && (
				<div className="min-w-[100px] w-[100px] pr-1">
					<span className="text-xs text-muted-foreground font-semibold">
						{label}
					</span>
				</div>
			)}
			<div className="flex flex-row space-x-1">
				{icon && <Icon name={icon} className={color} />}
				{children}
			</div>
		</div>
	)
}

export default FieldWrapper

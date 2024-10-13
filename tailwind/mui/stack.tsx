'use client'

import React from 'react'
import { cn } from '../../shadcn/lib/utils'

type StackProps = {
	children: React.ReactNode
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
	spacing?: number
	alignItems?: 'flex-start' | 'flex-end' | 'center'
	justifyContent?:
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
	divider?: React.ReactNode
	className?: string
}

const directionClasses = {
	row: 'flex-col sm:flex-row',
	'row-reverse': 'flex-col sm:flex-row-reverse',
	column: 'flex-col',
	'column-reverse': 'flex-col-reverse',
}

const alignItemsClasses = {
	'flex-start': 'items-start',
	'flex-end': 'items-end',
	center: 'items-center',
	stretch: 'items-stretch',
	baseline: 'items-baseline',
}

const justifyContentClasses = {
	'flex-start': 'justify-start',
	'flex-end': 'justify-end',
	center: 'justify-center',
	'space-between': 'justify-between',
	'space-around': 'justify-around',
	'space-evenly': 'justify-evenly',
}

export default function Stack({
	children,
	direction = 'column',
	spacing = 4,
	alignItems = 'flex-start',
	justifyContent = 'flex-start',
	divider,
	className,
}: StackProps) {
	const getSpacingClass = () => {
		if (spacing === 0) return ''
		if (direction == 'row' || direction == 'row-reverse') {
			return `space-y-${spacing} space-x-${spacing}`
		} else {
			return `space-y-${spacing}`
		}
	}

	const stackClasses = cn(
		'flex w-full',
		directionClasses[direction],
		getSpacingClass(),
		alignItemsClasses[alignItems],
		justifyContentClasses[justifyContent],
		className
	)

	const childrenArray = React.Children.toArray(children)

	return (
		<div className={stackClasses}>
			{childrenArray.map((child, index) => (
				<React.Fragment key={index}>
					{child}
					{divider && index < childrenArray.length - 1 && (
						<div
							className={cn(
								direction.includes('row')
									? `my-${spacing} sm:my-0 sm:mx-${spacing}`
									: `my-${spacing}`,
								direction === 'row-reverse' ? 'sm:rotate-180' : ''
							)}
						>
							{divider}
						</div>
					)}
				</React.Fragment>
			))}
		</div>
	)
}

export { Stack }

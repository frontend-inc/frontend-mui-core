'use client'

import React from 'react'
import { cn } from '../../shadcn/lib/utils'

interface AppBarProps extends React.HTMLAttributes<HTMLElement> {
	position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'
	color?: 'default' | 'primary' | 'secondary' | 'transparent'
	elevation?: 0 | 1 | 2 | 3 | 4
}

const AppBar: React.FC<AppBarProps> = ({
	children,
	position = 'fixed',
	color = 'primary',
	elevation = 4,
	className,
	...props
}) => {
	const positionClasses = {
		fixed: 'fixed top-0 left-0 right-0',
		absolute: 'absolute top-0 left-0 right-0',
		sticky: 'sticky top-0',
		static: 'static',
		relative: 'relative',
	}

	const colorClasses = {
		default: 'bg-background text-foreground',
		primary: 'bg-primary text-primary-foreground',
		secondary: 'bg-secondary text-secondary-foreground',
		transparent: 'bg-transparent',
	}

	const elevationClasses = {
		0: '',
		1: 'shadow-sm',
		2: 'shadow',
		3: 'shadow-md',
		4: 'shadow-lg',
	}

	return (
		<header
			className={cn(
				'z-40',
				positionClasses[position],
				colorClasses[color],
				elevationClasses[elevation],
				className
			)}
			{...props}
		>
			{children}
		</header>
	)
}

export { AppBar }

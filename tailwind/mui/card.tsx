'use client'

import React from 'react'
import {
	Card as ShadcnCard,
	CardHeader as ShadcnCardHeader,
	CardContent as ShadcnCardContent,
	CardFooter,
} from '../../shadcn/ui/card'
import { cn } from '../../shadcn/lib/utils'

// Card
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
	return (
		<ShadcnCard className={cn('overflow-hidden', className)} {...props}>
			{children}
		</ShadcnCard>
	)
}

// CardHeader
interface CardHeaderProps {
	title?: React.ReactNode
	subheader?: React.ReactNode
	avatar?: React.ReactNode
	action?: React.ReactNode
	className?: string
}

const CardHeader: React.FC<CardHeaderProps> = ({
	title,
	subheader,
	avatar,
	action,
	className,
	...props
}) => {
	return (
		<ShadcnCardHeader className={cn('flex items-center', className)} {...props}>
			{avatar && <div className="mr-4">{avatar}</div>}
			<div className="flex-grow">
				{title && <h3 className="text-lg font-semibold">{title}</h3>}
				{subheader && (
					<p className="text-sm text-muted-foreground">{subheader}</p>
				)}
			</div>
			{action && <div>{action}</div>}
		</ShadcnCardHeader>
	)
}

// CardContent
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
}

const CardContent: React.FC<CardContentProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<ShadcnCardContent className={cn('p-4', className)} {...props}>
			{children}
		</ShadcnCardContent>
	)
}

// CardActions
interface CardActionsProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
	disableSpacing?: boolean
}

const CardActions: React.FC<CardActionsProps> = ({
	children,
	disableSpacing = false,
	className,
	...props
}) => {
	return (
		<CardFooter
			className={cn(
				'flex items-center',
				{ 'justify-start space-x-2': !disableSpacing },
				className
			)}
			{...props}
		>
			{children}
		</CardFooter>
	)
}

export { Card, CardHeader, CardContent, CardActions }

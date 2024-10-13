'use client'

import React, { forwardRef } from 'react'
import { Typography } from './typography'
import { cn } from '../../shadcn/lib/utils'

// List Component
const List = forwardRef<
	HTMLUListElement,
	React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
	<ul ref={ref} className={cn('w-full', className)} {...props} />
))
List.displayName = 'List'

// ListItem Component
const ListItem = forwardRef<
	HTMLLIElement,
	React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
	<li
		ref={ref}
		className={cn('py-2 px-4 flex items-center text-sm', className)}
		{...props}
	/>
))
ListItem.displayName = 'ListItem'

// ListItemText Component
const ListItemText = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & {
		primary?: React.ReactNode
		secondary?: React.ReactNode
	}
>(({ className, primary, secondary, ...props }, ref) => (
	<div ref={ref} className={cn('flex flex-col', className)} {...props}>
		{primary && <Typography variant="body1">{primary}</Typography>}
		{secondary && <Typography variant="body2">{secondary}</Typography>}
	</div>
))
ListItemText.displayName = 'ListItemText'

// ListItemButton Component
const ListItemButton = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			'flex w-full items-center py-2 px-4 text-sm rounded-md transition-colors hover:bg-accent focus:bg-accent focus:outline-none',
			className
		)}
		role="button"
		tabIndex={0}
		{...props}
	/>
))
ListItemButton.displayName = 'ListItemButton'

// ListItemIcon Component
const ListItemIcon = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn('mr-2 h-4 w-4 shrink-0', className)}
		{...props}
	/>
))
ListItemIcon.displayName = 'ListItemIcon'

export { List, ListItem, ListItemText, ListItemButton, ListItemIcon }

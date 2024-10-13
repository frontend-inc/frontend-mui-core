'use client'

import React, { useState } from 'react'
import {
	Tabs as ShadcnTabs,
	TabsList,
	TabsTrigger,
	TabsContent,
} from '../../shadcn/ui/tabs'
import { cn } from '../../shadcn/lib/utils'

interface TabProps {
	label: string
	value: string
	children: React.ReactNode
	disabled?: boolean
}

interface TabsProps {
	children: React.ReactElement<TabProps>[]
	defaultValue?: string
	className?: string
	onChange?: (value: string) => void
}

export const Tab: React.FC<TabProps> = ({
	label,
	value,
	children,
	disabled,
}) => {
	return (
		<React.Fragment>
			<TabsTrigger value={value} disabled={disabled}>
				{label}
			</TabsTrigger>
			<TabsContent value={value}>{children}</TabsContent>
		</React.Fragment>
	)
}

export const Tabs: React.FC<TabsProps> = ({
	children,
	defaultValue,
	className,
	onChange,
}) => {
	const [activeTab, setActiveTab] = useState(
		defaultValue || children[0].props.value
	)

	const handleTabChange = (value: string) => {
		setActiveTab(value)
		if (onChange) {
			onChange(value)
		}
	}

	return (
		<ShadcnTabs
			value={activeTab}
			onValueChange={handleTabChange}
			className={cn('w-full', className)}
		>
			<TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
				{React.Children.map(children, (child) =>
					React.cloneElement(child, { key: child.props.value })
				)}
			</TabsList>
			{React.Children.map(children, (child) =>
				React.cloneElement(child, { key: child.props.value })
			)}
		</ShadcnTabs>
	)
}

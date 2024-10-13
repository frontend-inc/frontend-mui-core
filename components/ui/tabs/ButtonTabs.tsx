'use client'

import React from 'react'
import { Tabs, TabsList, TabsTrigger } from '../../../shadcn/ui/tabs'
import { Icon } from '../../../components'
import { cn } from '../../../shadcn/lib/utils'

type ButtonTabsProps = {
	handleChange: (value: string) => void
	options: {
		icon?: string
		label?: string
		value: string
	}[]
	className?: string
	fullWidth?: boolean
	value: string
}

export default function ButtonTabs({
	handleChange,
	options,
	value,
	className,
	fullWidth,
}: ButtonTabsProps) {
	return (
		<Tabs value={value} onValueChange={handleChange}>
			<TabsList className={cn(className, fullWidth && 'w-full')}>
				{options.map((tab, i) => {
					return (
						<TabsTrigger
							key={i}
							value={tab.value}
							className={`w-full flex items-center justify-center space-x-2`}
						>
							{tab.icon && (
								<Icon name={tab.icon} className={cn(tab.label && 'mr-2')} />
							)}
							<span className="text-sm">{tab?.label}</span>
						</TabsTrigger>
					)
				})}
			</TabsList>
		</Tabs>
	)
}

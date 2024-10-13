'use client'

import React from 'react'
import { cn } from '../../shadcn/lib/utils'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbsProps {
	children: React.ReactNode
	separator?: React.ReactNode
	maxItems?: number
	itemsBeforeCollapse?: number
	itemsAfterCollapse?: number
	className?: string
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
	children,
	separator = <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />,
	maxItems = 8,
	itemsBeforeCollapse = 1,
	itemsAfterCollapse = 1,
	className,
}) => {
	const childrenArray = React.Children.toArray(children)
	const totalItems = childrenArray.length

	let displayedItems: React.ReactNode[]

	if (totalItems > maxItems) {
		const beforeItems = childrenArray.slice(0, itemsBeforeCollapse)
		const afterItems = childrenArray.slice(totalItems - itemsAfterCollapse)
		displayedItems = [
			...beforeItems,
			<li key="ellipsis" className="mx-2">
				...
			</li>,
			...afterItems,
		]
	} else {
		displayedItems = childrenArray
	}

	return (
		<nav aria-label="breadcrumb" className={cn('text-sm', className)}>
			<ol className="flex items-center">
				{displayedItems.map((child, index) => (
					<React.Fragment key={index}>
						{index > 0 && separator}
						<li className="flex items-center">{child}</li>
					</React.Fragment>
				))}
			</ol>
		</nav>
	)
}

export { Breadcrumbs }

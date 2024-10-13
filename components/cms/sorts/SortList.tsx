'use client'

import React from 'react'
import { cn } from '../../../shadcn/lib/utils'
import { Button } from '../../../shadcn/ui/button'
import { Check } from 'lucide-react'
import { SortOptionType } from '../../../types'
import { Typography } from '../../../tailwind'
import { MenuList } from '../../../components'

// Assuming SORT_DIRECTIONS is imported from a constants file
const SORT_DIRECTIONS = [
	{ value: 'asc', label: 'Ascending' },
	{ value: 'desc', label: 'Descending' },
]

type SortListProps = {
	sortOptions: SortOptionType[]
	sortBy: string
	sortDirection: 'asc' | 'desc'
	handleSortBy: (field: SortOptionType) => void
	handleSortDirection: (sortDirection: 'asc' | 'desc') => void
}

export default function SortList({
	sortOptions,
	sortBy,
	sortDirection,
	handleSortBy,
	handleSortDirection,
}: SortListProps) {
	return (
		<ul>
			<MenuList label="Sort By">
				<ul className="space-y-2">
					{sortOptions?.map((sortOption) => (
						<Button
							key={sortOption.name}
							variant="outline"
							className={cn(
								'w-full justify-start hover:bg-primary/10',
								sortBy === sortOption.name &&
									'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground'
							)}
							onClick={() => handleSortBy(sortOption)}
						>
							<span className="flex-1 text-left">{sortOption.label}</span>
							{sortBy === sortOption.name && <Check className="w-4 h-4 ml-2" />}
						</Button>
					))}
				</ul>
			</MenuList>
			<MenuList label="Direction" enableBorder>
				<ul className="space-y-2">
					{SORT_DIRECTIONS.map((direction) => (
						<Button
							key={direction.value}
							variant="outline"
							className={cn(
								'w-full justify-start hover:bg-primary hover:text-primary-foreground',
								sortDirection === direction.value &&
									'bg-primary text-primary-foreground'
							)}
							onClick={() =>
								handleSortDirection(direction.value as 'asc' | 'desc')
							}
						>
							<span className="flex-1 text-left">{direction.label}</span>
							{sortDirection === direction.value && (
								<Check className="w-4 h-4 ml-2" />
							)}
						</Button>
					))}
				</ul>
			</MenuList>
		</ul>
	)
}

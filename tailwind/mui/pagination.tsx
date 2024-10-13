'use client'

import React from 'react'
import { cn } from '../../shadcn/lib/utils'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { Button } from '../../shadcn/ui/button'

interface PaginationProps {
	count: number
	page: number
	onChange: (event: React.ChangeEvent<unknown>, page: number) => void
	disabled?: boolean
	siblingCount?: number
	boundaryCount?: number
	className?: string
}

const Pagination: React.FC<PaginationProps> = ({
	count,
	page,
	onChange,
	disabled = false,
	siblingCount = 1,
	boundaryCount = 1,
	className,
}) => {
	const range = (start: number, end: number) => {
		const length = end - start + 1
		return Array.from({ length }, (_, i) => start + i)
	}

	const startPages = range(1, Math.min(boundaryCount, count))
	const endPages = range(
		Math.max(count - boundaryCount + 1, boundaryCount + 1),
		count
	)

	const siblingsStart = Math.max(
		Math.min(page - siblingCount, count - boundaryCount - siblingCount * 2 - 1),
		boundaryCount + 2
	)

	const siblingsEnd = Math.min(
		Math.max(page + siblingCount, boundaryCount + siblingCount * 2 + 2),
		endPages.length > 0 ? endPages[0] - 2 : count - 1
	)

	const itemList = [
		...startPages,
		...(siblingsStart > boundaryCount + 2
			? ['ellipsis']
			: boundaryCount + 1 < count - boundaryCount
			? [boundaryCount + 1]
			: []),
		...range(siblingsStart, siblingsEnd),
		...(siblingsEnd < count - boundaryCount - 1
			? ['ellipsis']
			: count - boundaryCount > boundaryCount
			? [count - boundaryCount]
			: []),
		...endPages,
	]

	const handleClick = (value: number | string) => {
		if (typeof value === 'number' && !disabled) {
			onChange({} as React.ChangeEvent<unknown>, value)
		}
	}

	return (
		<nav
			className={cn('flex items-center justify-center', className)}
			aria-label="pagination navigation"
		>
			<ul className="flex list-none">
				<li>
					<Button
						variant="outline"
						size="icon"
						className="mr-2"
						onClick={() => handleClick(page - 1)}
						disabled={page === 1 || disabled}
						aria-label="Go to previous page"
					>
						<ChevronLeft className="h-4 w-4" />
					</Button>
				</li>
				{itemList.map((item, index) => (
					<li key={index}>
						{item === 'ellipsis' ? (
							<Button variant="ghost" size="icon" className="mx-1" disabled>
								<MoreHorizontal className="h-4 w-4" />
							</Button>
						) : (
							<Button
								variant={page === item ? 'default' : 'outline'}
								size="icon"
								className="mx-1"
								onClick={() => handleClick(item as number)}
								disabled={disabled}
								aria-label={`Go to page ${item}`}
								aria-current={page === item ? 'page' : undefined}
							>
								{item}
							</Button>
						)}
					</li>
				))}
				<li>
					<Button
						variant="outline"
						size="icon"
						className="ml-2"
						onClick={() => handleClick(page + 1)}
						disabled={page === count || disabled}
						aria-label="Go to next page"
					>
						<ChevronRight className="h-4 w-4" />
					</Button>
				</li>
			</ul>
		</nav>
	)
}

export { Pagination }

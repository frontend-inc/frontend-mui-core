import React from 'react'
import { Button } from '../../../../shadcn/ui/button'
import { Badge } from '../../../../shadcn/ui/badge'
import { Icon, IconLoading } from '../../../../components'
import { X } from 'lucide-react'

type TableFilterButtonProps = {
	loading: boolean
	query: any
	handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
	badgeCount: number
	handleClearFilters: () => void
}

export default function TableFilterButton(props: TableFilterButtonProps) {
	const {
		loading,
		query = {},
		handleClick,
		badgeCount,
		handleClearFilters,
	} = props

	const { keywords, filters = {} } = query
	const hasFilters = keywords || Object.keys(filters)?.length > 0

	return (
		<div className="relative inline-flex">
			<Badge className="absolute -top-2 -right-2 z-10">
				{badgeCount}
			</Badge>
			<div className="inline-flex rounded-md shadow-sm" role="group">
				<Button
					variant="secondary"
					className="rounded-r-none"
					onClick={handleClick}
				>
					{loading ? (
						<IconLoading className="mr-2 h-4 w-4" />
					) : (
						<Icon name="ListFilter" className="mr-2 h-4 w-4" />
					)}
					Filters
				</Button>
				{hasFilters && (
					<Button
						variant="secondary"
						className="rounded-l-none px-2 w-9"
						onClick={handleClearFilters}
					>
						<X className="h-4 w-4" />
					</Button>
				)}
			</div>
		</div>
	)
}

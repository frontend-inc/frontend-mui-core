import React, { useState, useEffect } from 'react'
import { SearchInput } from '../../../components'
import { IconButton, Hidden } from '../../../tailwind'
import { Edit, Filter, Trash } from 'lucide-react'
import { Button } from '../../../shadcn/ui/button'
import { Badge } from '../../../tailwind'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '../../../shadcn/ui/popover'
import { ListFilter } from 'lucide-react'
import TableFilterForm from './filters/TableFilterForm'

type TableToolbarProps = {
	loading: boolean
	selected: any[]
	query: any
	enableDelete?: boolean
	enableEdit?: boolean
	handleKeywordChange: (e: any) => void
	handleKeywordSearch: (term: string) => void
	handleFilter: (ev: any) => void
	handleEdit: (items: any[]) => void
	handleDelete: (items: any[]) => void
	handleClearQuery: () => void
	handlePublish: (items: any[]) => void
	handleUnpublish: (items: any[]) => void
	secondaryActions?: React.ReactNode
	fields: any[]
	handleSearch: (keywords: any) => void
	handleChange: (e: any) => void
	handleClearFilters: () => void
}

const TableToolbar: React.FC<TableToolbarProps> = (props) => {
	const {
		loading,
		selected,
		query,
		enableDelete = false,
		enableEdit = false,
		handleKeywordChange,
		handleKeywordSearch,
		handleFilter,
		handleEdit,
		handleDelete,
		handlePublish,
		handleUnpublish,
		handleClearQuery,
		secondaryActions,

		fields,
		handleSearch,
		handleChange,
		handleClearFilters,
	} = props

	const [isOpen, setIsOpen] = useState(false)

	const [badgeCount, setBadgeCount] = useState(0)

	useEffect(() => {
		if (query?.filters) {
			setBadgeCount(Object.keys(query.filters)?.length)
		} else {
			setBadgeCount(0)
		}
	}, [query?.filters])

	return (
		<div className="flex flex-row justify-between items-center w-full sm:w-auto">
			<div className="flex flex-row justify-start items-center w-full gap-2.5">
				<div>
					<SearchInput
						value={query?.keywords}
						handleChange={handleKeywordChange}
						handleSearch={handleKeywordSearch}
					/>
				</div>
				<Hidden mdDown>
					<div className="relative flex flex-row justify-start items-center">
						<Popover open={isOpen} onOpenChange={setIsOpen}>
							{badgeCount > 0 && (
								<Badge className="absolute -top-2 -right-2 z-10">
									{badgeCount}
								</Badge>
							)}
							<PopoverTrigger asChild>
								<Button className="text-primary-foreground" color="secondary">
									<ListFilter className="mr-2 h-4 w-4" />
									Filter
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-[400px]">
								<TableFilterForm
									loading={loading}
									query={query}
									fields={fields}
									handleSearch={handleSearch}
									handleChange={handleChange}
									handleClearFilters={handleClearFilters}
								/>
							</PopoverContent>
						</Popover>
					</div>
				</Hidden>
			</div>
			<div className="w-60 flex flex-row justify-end items-center">
				<div className="flex flex-row justify-start items-center">
					<Hidden mdDown>
						<div className="flex flex-row space-x-1">
							{selected?.length > 0 && (
								<>
									{enableDelete && (
										<Button
											color="secondary"
											onClick={() => handleDelete(selected)}
										>
											Delete
										</Button>
									)}
									{enableEdit && (
										<>
											<Button
												color="secondary"
												onClick={() => handlePublish(selected)}
											>
												Publish
											</Button>
											<Button
												color="secondary"
												onClick={() => handleUnpublish(selected)}
											>
												Unpublish
											</Button>
										</>
									)}
								</>
							)}
							{secondaryActions && secondaryActions}
						</div>
					</Hidden>
					<Hidden mdUp>
						<div className="flex flex-row justify-start items-center">
							<Badge badgeContent={badgeCount}>
								<IconButton onClick={handleFilter}>
									<Filter className="w-5 h-5 text-foreground" />
								</IconButton>
							</Badge>
							{selected?.length > 0 && (
								<>
									{enableDelete && (
										<IconButton onClick={() => handleDelete(selected)}>
											<Trash className="w-5 h-5 text-foreground" />
										</IconButton>
									)}
									{enableEdit && (
										<IconButton onClick={() => handleEdit(selected)}>
											<Edit className="w-5 h-5 text-foreground" />
										</IconButton>
									)}
								</>
							)}
						</div>
					</Hidden>
				</div>
			</div>
		</div>
	)
}

export default TableToolbar

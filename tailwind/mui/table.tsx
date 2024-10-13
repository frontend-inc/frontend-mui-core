'use client'

import React from 'react'
import {
	Table as ShadcnTable,
	TableHeader,
	TableBody as ShadcnTableBody,
	TableFooter as ShadcnTableFooter,
	TableHead as ShadcnTableHead,
	TableRow as ShadcnTableRow,
	TableCell as ShadcnTableCell,
} from '../../shadcn/ui/table'
import { Button } from '../../shadcn/ui/button'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../../shadcn/ui/select'
import { cn } from '../../shadcn/lib/utils'
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from 'lucide-react'

// TableContainer
const TableContainer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	className,
	...props
}) => {
	return <div className={cn('overflow-x-auto', className)} {...props} />
}

// Table
const Table: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = ({
	className,
	...props
}) => {
	return <ShadcnTable className={cn('w-full', className)} {...props} />
}

// TableHead
const TableHead: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({
	className,
	...props
}) => {
	return <TableHeader className={cn('bg-muted/50', className)} {...props} />
}

// TableBody
const TableBody: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = (
	props
) => {
	return <ShadcnTableBody {...props} />
}

// TableRow
const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = ({
	className,
	...props
}) => {
	return (
		<ShadcnTableRow className={cn('hover:bg-muted/50', className)} {...props} />
	)
}

// TableCell
const TableCell: React.FC<React.TdHTMLAttributes<HTMLTableCellElement>> = ({
	className,
	...props
}) => {
	return <ShadcnTableCell className={cn('p-4', className)} {...props} />
}

// TableHeaderCell
const TableHeaderCell: React.FC<
	React.ThHTMLAttributes<HTMLTableCellElement>
> = ({ className, ...props }) => {
	return (
		<ShadcnTableHead className={cn('p-4 font-bold', className)} {...props} />
	)
}

// TableFooter
const TableFooter: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({
	className,
	...props
}) => {
	return (
		<ShadcnTableFooter
			className={cn('bg-muted/50 font-medium', className)}
			{...props}
		/>
	)
}

// TablePagination
interface TablePaginationProps {
	count: number
	page: number
	rowsPerPage: number
	onPageChange: (
		event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number
	) => void
	onRowsPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
	rowsPerPageOptions?: number[]
}

const TablePagination: React.FC<TablePaginationProps> = ({
	count,
	page,
	rowsPerPage,
	onPageChange,
	onRowsPerPageChange,
	rowsPerPageOptions = [5, 10, 25],
}) => {
	const handleFirstPageButtonClick = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		onPageChange(event, 0)
	}

	const handleBackButtonClick = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		onPageChange(event, page - 1)
	}

	const handleNextButtonClick = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		onPageChange(event, page + 1)
	}

	const handleLastPageButtonClick = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
	}

	return (
		<div className="flex items-center justify-between px-2 py-3">
			<div className="flex items-center space-x-2">
				<span className="text-sm text-muted-foreground">Rows per page:</span>
				<Select
					value={rowsPerPage.toString()}
					onValueChange={(value) =>
						onRowsPerPageChange({ target: { value } } as any)
					}
				>
					<SelectTrigger className="h-8 w-[70px]">
						<SelectValue>{rowsPerPage}</SelectValue>
					</SelectTrigger>
					<SelectContent>
						{rowsPerPageOptions.map((option) => (
							<SelectItem key={option} value={option.toString()}>
								{option}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<div className="flex items-center space-x-6 lg:space-x-8">
				<div className="flex w-[100px] items-center justify-center text-sm font-medium">
					Page {page + 1} of {Math.ceil(count / rowsPerPage)}
				</div>
				<div className="flex items-center space-x-2">
					<Button
						variant="outline"
						className="hidden h-8 w-8 p-0 lg:flex"
						onClick={handleFirstPageButtonClick}
						disabled={page === 0}
					>
						<span className="sr-only">Go to first page</span>
						<ChevronsLeft className="h-4 w-4" />
					</Button>
					<Button
						variant="outline"
						className="h-8 w-8 p-0"
						onClick={handleBackButtonClick}
						disabled={page === 0}
					>
						<span className="sr-only">Go to previous page</span>
						<ChevronLeft className="h-4 w-4" />
					</Button>
					<Button
						variant="outline"
						className="h-8 w-8 p-0"
						onClick={handleNextButtonClick}
						disabled={page >= Math.ceil(count / rowsPerPage) - 1}
					>
						<span className="sr-only">Go to next page</span>
						<ChevronRight className="h-4 w-4" />
					</Button>
					<Button
						variant="outline"
						className="hidden h-8 w-8 p-0 lg:flex"
						onClick={handleLastPageButtonClick}
						disabled={page >= Math.ceil(count / rowsPerPage) - 1}
					>
						<span className="sr-only">Go to last page</span>
						<ChevronsRight className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</div>
	)
}

export {
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	TableHeaderCell,
	TableFooter,
	TablePagination,
}

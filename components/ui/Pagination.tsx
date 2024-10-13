import React, { useState, useEffect } from 'react'
import { Button } from '../../shadcn/ui/button'
import {
	PaginationContent,
	PaginationItem,
	Pagination as ShadcnPagination,
} from '../../shadcn/ui/pagination'
import { Loader2 } from 'lucide-react'

type PaginationProps = {
	loading?: boolean
	totalCount?: number
	startIndex?: number
	endIndex?: number
	page?: number
	perPage?: number
	numPages?: number
	handlePaginate: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = (props) => {
	const {
		loading,
		totalCount = 0,
		page = 1,
		numPages = 1,
		perPage = 10,
		handlePaginate,
	} = props

	const [startIndex, setStartIndex] = useState(0)
	const [endIndex, setEndIndex] = useState(0)
	const [pageNumber, setPageNumber] = useState(page)

	const handleChangePage = (nextPage: number) => {
		setPageNumber(nextPage)
		handlePaginate(nextPage)
	}

	useEffect(() => {
		if (page && numPages && totalCount && perPage) {
			let start = (page - 1) * perPage + 1
			setStartIndex(start)
			setEndIndex(Math.min(start + perPage - 1, totalCount))
		}
	}, [page, numPages, totalCount, perPage])

	return (
		<div className="p-2 flex flex-row justify-between items-center border-t border-divider w-full">
			<div className="hidden sm:block mx-2">
				{loading ? (
					<Loader2 className="h-6 w-6 animate-spin text-primary" />
				) : (
					<p className="text-sm text-muted-foreground">
						Results {startIndex} - {endIndex} of {totalCount}
					</p>
				)}
			</div>
			<div>
				<ShadcnPagination>
					<PaginationContent>
						<PaginationItem>
							<Button
								variant="outline"
								onClick={() => handleChangePage(Math.max(1, pageNumber - 1))}
								disabled={pageNumber === 1}
								className="text-foreground"
							>
								Previous
							</Button>
						</PaginationItem>
						{Array.from({ length: numPages }, (_, i) => i + 1).map((num) => (
							<PaginationItem key={num}>
								<Button
									variant={num === pageNumber ? 'default' : 'outline'}
									size="sm"
									onClick={() => handleChangePage(num)}
								>
									{num}
								</Button>
							</PaginationItem>
						))}
						<PaginationItem>
							<Button
								variant="outline"
								onClick={() =>
									handleChangePage(Math.min(numPages, pageNumber + 1))
								}
								disabled={pageNumber === numPages}
								className="text-foreground"
							>
								Next
							</Button>
						</PaginationItem>
					</PaginationContent>
				</ShadcnPagination>
			</div>
		</div>
	)
}

export default Pagination

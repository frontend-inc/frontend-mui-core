'use client'

import React from 'react'
import { Button } from '../../../shadcn/ui/button'
import { ChevronDown } from 'lucide-react'

type LoadMoreProps = {
	page: number
	numPages: number
	handlePaginate: () => void
}

export default function LoadMore({
	page,
	numPages,
	handlePaginate,
}: LoadMoreProps) {
	return (
		<div className="w-full flex justify-center items-center">
			{page < numPages && (
				<Button
					variant="secondary"
					onClick={handlePaginate}
					className="flex items-center"
				>
					Load More
					<ChevronDown className="ml-2 h-4 w-4" />
				</Button>
			)}
		</div>
	)
}

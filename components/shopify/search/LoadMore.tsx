'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '../../../tailwind'

type LoadMoreProps = {
	loading?: boolean
	hasNextPage?: boolean
	handleSearch?: () => void
}

export default function LoadMore({
	loading = false,
	hasNextPage = false,
	handleSearch,
}: LoadMoreProps) {
	if (!hasNextPage) return null

	return (
		<div className="flex justify-center w-full">
			<Button
				loading={loading}
				color="secondary"
				onClick={handleSearch}
				disabled={loading}
				endIcon={<ChevronDown className="h-4 w-4" />}
			>
				Load More
			</Button>
		</div>
	)
}

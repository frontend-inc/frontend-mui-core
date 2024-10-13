'use client'

import React from 'react'
import { Button } from '../../../tailwind'
import { Icon } from '../../../components'

type LoadMoreProps = {
	page: number
	numPages: number
	handlePaginate: () => void
	enableInfiniteLoad?: boolean
}

const LoadMore: React.FC<LoadMoreProps> = (props) => {
	const { page, numPages, handlePaginate, enableInfiniteLoad = false } = props

	if (page >= numPages) return null
	return (
		<div className="flex flex-row w-full justify-center items-center">
			<Button
				color="secondary"
				variant="contained"
				onClick={handlePaginate}
				endIcon={<Icon name="ChevronDown" />}
			>
				Load More
			</Button>
		</div>
	)
}

export default LoadMore

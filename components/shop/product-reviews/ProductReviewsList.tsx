'use client'

import React from 'react'
import ProductReviewItem from './ProductReviewItem'
import { LoadMore, DataLayout } from '../..'
import { useResourceContext } from 'frontend-js'

const ProductReviewsList = (props) => {
	const { loading, resources, query, setQuery, page, numPages } =
		useResourceContext()

	const handleLoadMore = () => {
		let perPage = (query?.per_page || 12) + 12
		setQuery({
			...query,
			per_page: perPage,
		})
	}

	return (
		<DataLayout loading={loading}>
			{!loading &&
				resources?.map((resource, index) => (
					<ProductReviewItem key={index} resource={resource} />
				))}
			<LoadMore
				page={page}
				numPages={numPages}
				handlePaginate={handleLoadMore}
			/>
		</DataLayout>
	)
}

export default ProductReviewsList

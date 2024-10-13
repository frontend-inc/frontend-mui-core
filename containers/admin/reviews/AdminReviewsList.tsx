'use client'

import React from 'react'
import { ResourceList } from '../../../components'

import { useAdmin } from '../../../hooks'
import { AdminReviewItem } from '../../../containers'
import AdminReviewShow from './AdminReviewShow'

const AdminReviewsList: React.FC = () => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			enableBorder={false}
			url={`${apiUrl}/reviews`}
			name="review"
			enableShow
			enableSearch
			enableDelete
			sortOptions={[
				{ name: 'created_at', label: 'Date' },
				{ name: 'rating', label: 'Rating' },
			]}
			filterOptions={[
				{
					field: 'rating',
					label: 'Rating',
					variant: 'ratings_scale',
				},
				{
					field: 'flagged',
					label: 'Flagged',
					variant: 'boolean',
				},
			]}
			displayFields={[
				{ name: 'rating', label: 'Rating', variant: 'rating' },
				{ name: 'body', label: 'Review', variant: 'text' },
			]}
			component={AdminReviewItem}
			show={AdminReviewShow}
			emptyIcon="Star"
			emptyTitle="No reviews found"
			emptyDescription="No reviews found for this app"
		/>
	)
}

export default AdminReviewsList

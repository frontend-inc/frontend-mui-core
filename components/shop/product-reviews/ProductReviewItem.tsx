'use client'

import React from 'react'
import { Typography, Rating } from '../../../tailwind'
import { UserAvatar } from '../..'
import moment from 'moment'
import { cn } from '../../../shadcn/lib/utils'

type ProductReviewItemProps = {
	resource: any
	user?: any
	handleDelete?: (review: any) => void
}

export default function ProductReviewItem({
	resource,
}: ProductReviewItemProps) {
	return (
		<div className="flex items-start py-4 border-b border-divider hover:bg-gray-50">
			<div className="mr-4 mt-1">
				<UserAvatar user={resource?.user} />
			</div>
			<div className="flex-grow">
				<Rating
					readOnly
					value={resource.rating}
					className="text-primary mb-2"
				/>
				<div className="space-y-3">
					<Typography variant="body1">{resource?.title}</Typography>
					<Typography variant="body1">{resource.body}</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
						className="text-sm"
					>
						{`@${resource?.user?.username}`} reviewed{' '}
						{moment(resource?.created_at).fromNow()}
					</Typography>
				</div>
			</div>
		</div>
	)
}

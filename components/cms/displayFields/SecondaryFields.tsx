'use client'

import React from 'react'
import { DisplayFields, ProductRating, UserChip } from '../..'

type SecondaryFieldsProps = {
	resource: any
	fields: any[]
	enableRatings?: boolean
	enableUsers?: boolean
	slots?: {
		ratings?: any
		fields?: any
		user?: any
	}
}

const SecondaryFields: React.FC<SecondaryFieldsProps> = (props) => {
	const {
		resource,
		fields = [],
		enableRatings,
		enableUsers,
		slots = {
			ratings: {},
			fields: {},
			user: {},
		},
	} = props || {}

	return (
		<div className="flex flex-col space-y-1">
			{enableRatings == true && (
				<ProductRating size="small" resource={resource} {...slots.ratings} />
			)}
			<DisplayFields fields={fields} resource={resource} {...slots.fields} />
			{enableUsers && <UserChip user={resource?.user} {...slots.user} />}
		</div>
	)
}

export default SecondaryFields

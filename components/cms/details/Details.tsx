'use client'

import React from 'react'
import { Field } from '../..'
import { DisplayFieldType } from '../../../types'
import { cn } from '../../../shadcn/lib/utils'

export type DetailsProps = {
	displayFields: DisplayFieldType[]
	url: string
	resource: any
	enableBorder?: boolean
}

const FULL_WIDTH_VARIANTS = ['text', 'image', 'url']

const Details: React.FC<DetailsProps> = (props) => {
	const { resource, displayFields, enableBorder = false } = props

	return (
		<div className="w-full grid">
			{document &&
				displayFields?.map((field, i) => (
					<div
						key={i}
						className={cn(
							'grid-span-1',
							FULL_WIDTH_VARIANTS.includes(field?.variant)
								? 'sm:grid-span-3'
								: 'sm:grid-span-1'
						)}
					>
						<Field
							field={field}
							enableBorder={enableBorder}
							resource={resource}
						/>
					</div>
				))}
		</div>
	)
}

export default Details

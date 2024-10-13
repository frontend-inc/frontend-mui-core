'use client'

import React from 'react'
import { DisplayField } from '../..'
import { DisplayFieldType } from '../../../types'
import { cn } from '../../../shadcn/lib/utils'

type DisplayFieldsProps = {
	fields: DisplayFieldType[]
	resource: any
	direction?: 'row' | 'column'
	disableBorder?: boolean
	disableLabel?: boolean
	className?: string
}

const DisplayFields: React.FC<DisplayFieldsProps> = (props) => {
	const {
		className,
		fields,
		disableBorder = false,
		direction = 'row',
		resource,
		disableLabel,
	} = props || {}

	return (
		<div
			className={cn(
				'flex',
				direction == 'row' ? 'flex-row space-x-2' : 'flex-col space-y-2',
				className
			)}
		>
			{fields?.map((field, index) => (
				<DisplayField
					key={index}
					field={field}
					resource={resource}
					disableBorder={disableBorder}
					disableLabel={disableLabel}
				/>
			))}
		</div>
	)
}

export default DisplayFields

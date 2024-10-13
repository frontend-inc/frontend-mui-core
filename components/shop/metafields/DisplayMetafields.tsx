'use client'

import React from 'react'
import { DisplayMetafield } from '../..'
import { DisplayFieldType } from '../../../types'

type DisplayMetafieldsProps = {
	fields: DisplayFieldType[]
	resource: any
	enableTitle?: boolean
	enableRatings?: boolean
	alignItems?: 'flex-start' | 'center' | 'flex-end'
}

const DisplayMetafields: React.FC<DisplayMetafieldsProps> = (props) => {
	const { fields, resource } = props || {}

	return (
		<div className="flex flex-col">
			{fields?.map((field, index) => (
				<DisplayMetafield
					key={index}
					field={field}
					resource={resource}
					disablePadding
				/>
			))}
		</div>
	)
}

export default DisplayMetafields

'use client'

import React from 'react'
import { SocialFieldType } from '../../../types'
import { SocialField } from '../..'

export type SocialFieldsProps = {
	resource: any
	fields: SocialFieldType[]
}

const SocialFields: React.FC<SocialFieldsProps> = (props) => {
	const { resource, fields } = props || {}

	return (
		<div className="flex flex-row">
			{fields?.map((field, i) => (
				<SocialField key={i} field={field} resource={resource} />
			))}
		</div>
	)
}

export default SocialFields

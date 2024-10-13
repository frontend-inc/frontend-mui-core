'use client'

import React from 'react'
import { Placeholder } from '../..'
import { useResourceContext } from 'frontend-js'

type CollectionEmptyProps = {
	icon?: any
	title?: string
	description?: string
}

const CollectionEmpty: React.FC<CollectionEmptyProps> = (props) => {
	const { resources } = useResourceContext()
	const { icon, title, description } = props || {}

	if (resources?.length > 0) return null
	return (
		<div className="p-2 w-full flex justify-center items-center">
			<Placeholder icon={icon} title={title} description={description} />
		</div>
	)
}

export default CollectionEmpty

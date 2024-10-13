'use client'

import React from 'react'
import { ShowItem } from '../..'
import { ShowItemProps } from './ShowItem'
import { ResourceProvider } from 'frontend-js'

export type ShowProps = ShowItemProps & {
	url: string
	foreignUrl?: string
	resource?: any
}

const Show: React.FC<ShowProps> = (props) => {
	const { url, foreignUrl, resource } = props || {}

	return (
		<ResourceProvider
			name="document"
			url={url}
			foreignUrl={foreignUrl}
			resource={resource}
		>
			<ShowItem {...props} url={url} />
		</ResourceProvider>
	)
}

export default Show

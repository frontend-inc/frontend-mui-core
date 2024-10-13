'use client'

import React from 'react'
import { CollectionListProps } from './CollectionList'
import { CollectionList, ReferenceCollectionListItems } from '../..'

const ReferenceCollectionList: React.FC<CollectionListProps> = (props) => {
	let { url, resource } = props
	url = `${url}/${resource?.id}/references`
	return (
		<CollectionList
			{...props}
			url={url}
			resource={resource}
			list={ReferenceCollectionListItems}
		/>
	)
}

export default ReferenceCollectionList

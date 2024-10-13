'use client'

import React from 'react'
import { CollectionList } from '../..'
import { CollectionListProps } from './CollectionList'

const LikesGrid: React.FC<CollectionListProps> = (props) => {
	let { query = {}, ...rest } = props

	query = {
		...query,
		method: 'likes',
	}

	return <CollectionList query={query} {...rest} />
}

export default LikesGrid

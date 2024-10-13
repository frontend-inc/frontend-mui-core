'use client'

import React from 'react'
import CollectionList from '../collections/CollectionList'
import { CollectionListProps } from '../collections/CollectionList'

const SimilarList: React.FC<CollectionListProps> = (props) => {
	return <CollectionList {...props} filterSimilar />
}

export default SimilarList

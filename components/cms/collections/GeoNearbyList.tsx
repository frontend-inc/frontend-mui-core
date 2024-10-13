'use client'

import React from 'react'
import { CollectionList } from '../../../components'
import { CollectionListProps } from '../collections/CollectionList'

const GeoNearbyList: React.FC<CollectionListProps> = (props) => {
	return <CollectionList {...props} filterGeo />
}

export default GeoNearbyList

'use client'

import React from 'react'
import { CollectionList, GeoHeader } from '../..'
import { CollectionListProps } from '../collections/CollectionList'
import GeoListItems from './GeoListItems'

export type GeoListProps = CollectionListProps

const GeoList: React.FC<GeoListProps> = (props) => {
	return <CollectionList {...props} header={GeoHeader} list={GeoListItems} />
}

export default GeoList

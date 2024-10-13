'use client'

import React from 'react'
import { CollectionList } from '../..'
import { CollectionListProps } from '../collections/CollectionList'
import CarouselListItems from './CarouselListItems'

export type CarouselListProps = CollectionListProps

const CarouselList: React.FC<CarouselListProps> = (props) => {
	return <CollectionList {...props} list={CarouselListItems} />
}

export default CarouselList

'use client'

import React from 'react'
import { CollectionList } from '../..'
import { CollectionListProps } from './CollectionList'
import CarouselCoverListItems from './CarouselCoverListItems'

export type CarouselCoverListProps = CollectionListProps & {
	enableAutoPlay?: boolean
	enableArrows?: boolean
	buttonText?: string
}

const CarouselCoverList: React.FC<CarouselCoverListProps> = (props) => {
	const { enableAutoPlay, enableArrows, buttonText } = props || {}

	const slots = {
		list: {
			enableAutoPlay,
			enableArrows,
			buttonText,
		},
	}
	return (
		<CollectionList {...props} slots={slots} list={CarouselCoverListItems} />
	)
}

export default CarouselCoverList

'use client'

import React from 'react'
import { CollectionList, VideoListItems, ShowVideoModal } from '../..'
import { CollectionListProps } from './CollectionList'

export type VideoListProps = CollectionListProps

const VideoList: React.FC<VideoListProps> = (props) => {
	return (
		<CollectionList {...props} list={VideoListItems} show={ShowVideoModal} />
	)
}

export default VideoList

import React from 'react'
import { CollectionList, ShowImageModal, ImageListItems } from '../..'
import { CollectionListProps } from '../collections/CollectionList'

export type ImageListProps = CollectionListProps

const ImageList: React.FC<ImageListProps> = (props) => {
	return <CollectionList {...props} list={ImageListItems} show={ShowImageModal} />
}

export default ImageList

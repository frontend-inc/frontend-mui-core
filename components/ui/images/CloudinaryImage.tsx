'use client'

import React from 'react'
import { File as FileIcon } from 'lucide-react'
import {
	resizeCloudinaryImage,
	cloudinaryImageFromVideoUrl,
} from '../../../helpers'
import { VIDEO_FORMATS, IMAGE_OR_VIDEO_FORMATS } from '../../../constants/index'
import { Image } from '../../../components'

type CloudinaryImageProps = {
	src: string
	height?: number
	width?: number
}

const CloudinaryImage: React.FC<CloudinaryImageProps> = (props) => {
	const { src, height, width } = props
	let fileExtension = src.split('.').pop()
	let imageUrl = src
	//@ts-ignore
	if (VIDEO_FORMATS.includes(fileExtension)) {
		imageUrl = cloudinaryImageFromVideoUrl(src)
	} else {
		// convert all images to jpg to ensure that they render correctly
		imageUrl = src.slice(0, src.lastIndexOf('.')) + '.jpg'
	}

	const resizedImageUrl = resizeCloudinaryImage(imageUrl, {
		width: width,
		height: height,
	})

	//@ts-ignore
	const isImageOrVideo = IMAGE_OR_VIDEO_FORMATS.includes(fileExtension)

	return isImageOrVideo ? (
		<Image
			src={resizedImageUrl}
			height={height}
			//@ts-ignore
			width={width}
		/>
	) : (
		<FileIcon />
	)
}

export default CloudinaryImage

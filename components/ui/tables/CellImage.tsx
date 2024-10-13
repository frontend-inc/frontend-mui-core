'use client'

import React from 'react'
import { Image } from '../../../components'
import { cloudinaryImageFromVideoUrl } from '../../../helpers'

type CellImageProps = {
	value: {
		url
	}
	handleClick?: any
	size?: number
}

const CellImage: React.FC<CellImageProps> = (props) => {
	const { value, handleClick } = props
	let src = cloudinaryImageFromVideoUrl(value?.url)
	return (
		<div className="max-h-[64px] max-w-[64px]">
			<button
				className="w-full h-full rounded-lg focus:outline-none focus:ring-2"
				onClick={handleClick}
			>
				<Image src={src} aspectRatio={1.0} alt={'Image'} />
			</button>
		</div>
	)
}

export default CellImage

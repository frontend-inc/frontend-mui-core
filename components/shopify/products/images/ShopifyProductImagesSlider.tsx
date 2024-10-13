'use client'

import React from 'react'
import { Button } from '../../../../shadcn/ui/button'
// @ts-ignore
import Zoom from 'react-medium-image-zoom'
import { ShopifyImageType } from 'frontend-shopify'
import Image from 'next/image'

type ThumbnailProps = {
	image: ShopifyImageType
	active: boolean
	handleClick: (img: ShopifyImageType) => void
}

const Thumbnail: React.FC<ThumbnailProps> = (props) => {
	const { image, active, handleClick } = props
	return (
		<Button
			variant="ghost"
			className={`p-0 w-24 h-24 overflow-hidden rounded ${
				active ? 'ring-2 ring-primary' : 'ring-2 ring-transparent'
			}`}
			onClick={() => handleClick(image)}
		>
			<Image
				src={image.url}
				width={96}
				height={96}
				alt={image?.altText || ''}
				className="object-cover w-full h-full"
			/>
		</Button>
	)
}

type ShopifyProductImageSliderProps = {
	image: ShopifyImageType
	images: ShopifyImageType[]
	handleClick: (img: ShopifyImageType) => void
	height?: number
	width?: number
	thumbnailSize?: number
}

const ShopifyProductImageSlider: React.FC<ShopifyProductImageSliderProps> = (
	props
) => {
	const { image, images, handleClick, thumbnailSize = 80 } = props

	return (
		<div className="flex flex-col space-y-4">
			<div className="flex justify-center items-start">
				{image?.url && (
					<Zoom>
						<img
							src={image?.url}
							alt={image?.altText || ''}
							className="h-full w-full object-contain"
						/>
					</Zoom>
				)}
			</div>
			<div className="flex flex-row space-x-2 overflow-x-auto scrollbar-hide">
				{images?.map((img) => (
					<Thumbnail
						key={img?.id}
						image={img}
						active={img?.id === image?.id}
						handleClick={handleClick}
					/>
				))}
			</div>
		</div>
	)
}

export default ShopifyProductImageSlider

'use client'

import React from 'react'
import { CarouselImage, TouchableOpacity } from '../../..'
import { useProductContext } from 'frontend-shopify'
import Image from 'next/image'
import { AspectRatio } from '../../../../shadcn/ui/aspect-ratio'

const ShopifyProductImageCarousel: React.FC = () => {
	const { images, handleImageClick } = useProductContext()
	return (
		<CarouselImage>
			{images?.map((image) => (
				<div className="w-full h-full pb-1" key={image.id}>
					<TouchableOpacity handleClick={() => handleImageClick(image)}>
						<AspectRatio ratio={4 / 3}>
							<Image
								src={image?.url?.url}
								height={1200}
								width={1200}
								alt={image?.altText}
							/>
						</AspectRatio>
					</TouchableOpacity>
				</div>
			))}
		</CarouselImage>
	)
}

export default ShopifyProductImageCarousel

'use client'

import React from 'react'
import { Image } from '../../../../components'

type ShopifyProductImageListProps = {
	images: any[]
	loading?: boolean
	handleClick: (index: number) => void
}

const ShopifyProductImageList: React.FC<ShopifyProductImageListProps> = (
	props
) => {
	const { images, handleClick } = props

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
			{images?.map((image, i) => (
				<div key={i} className="w-full">
					<button
						className="w-full p-0 overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
						onClick={() => handleClick(i)}
					>
						<Image
							alt={'image'}
							src={image}
							className="w-full h-auto object-cover"
						/>
					</button>
				</div>
			))}
		</div>
	)
}

export default ShopifyProductImageList

'use client'

import React, { useEffect, useState } from 'react'
import { MetafieldIdentifierType, getMetafieldImage } from 'frontend-shopify'
import { useProducts } from 'frontend-shopify'
import { Image } from '../../../../components'

export type ShopifyMetafieldImageProps = {
	handle: string
	metafield: MetafieldIdentifierType
	height: number
	objectFit?: 'cover' | 'contain'
	bgcolor?: string
	opacity?: number
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const ShopifyMetafieldImage: React.FC<ShopifyMetafieldImageProps> = (props) => {
	const { handle, metafield } = props

	const { loading, product, findProduct } = useProducts()
	const [src, setSrc] = useState<string | null>(null)

	useEffect(() => {
		if (handle && metafield) {
			findProduct(handle, [metafield])
		}
	}, [handle, metafield])

	useEffect(() => {
		if (product) {
			setSrc(getMetafieldImage(product, metafield.key))
		}
	}, [product])

	if (!src) return null
	return (
		<Image
			// @ts-ignore
			image={src}
			alt={product?.title}
		/>
	)
}

export default ShopifyMetafieldImage

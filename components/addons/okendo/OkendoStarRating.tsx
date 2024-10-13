'use client'

import React, { useRef, useEffect } from 'react'
import { getShopifyIdFromGid } from 'frontend-shopify'
import { ShopifyProductType } from 'frontend-shopify'

type OkendoStarRatingProps = {
	product?: ShopifyProductType
}

const OkendoStarRating: React.FC<OkendoStarRatingProps> = (props) => {
	const { product } = props
	const widgetContainer = useRef(null)

	const initialiseWidget = () =>
		// @ts-ignore
		window.okeWidgetApi.initWidget(widgetContainer.current)

	useEffect(() => {
		// @ts-ignore
		if (window.okeWidgetApi?.initWidget) {
			initialiseWidget()
		} else {
			document.addEventListener('oke-script-loaded', initialiseWidget)
		}
		return () => {
			document.removeEventListener('oke-script-loaded', initialiseWidget)
		}
	}, [product?.id])

	if (!product?.id) return null
	return (
		<div
			///style={{ color }}
			ref={widgetContainer}
			data-oke-star-rating
			data-oke-reviews-product-id={`shopify-${getShopifyIdFromGid(
				product?.id
			)}`}
		/>
	)
}

export default OkendoStarRating

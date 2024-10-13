'use client'

import React, { useEffect, useRef } from 'react'
import { getShopifyIdFromGid } from 'frontend-shopify'
import { useProducts } from 'frontend-shopify'
import Head from 'next/head'

export type OkendoReviewsProps = {
	handle: string
	subscriberId: string
}

const OkendoReviews: React.FC<OkendoReviewsProps> = (props) => {
	const { handle, subscriberId } = props || {}

	const { loading, product, findProduct } = useProducts()

	const widgetContainer = useRef(null)

	const initializeReviewsWidget = () => {
		// @ts-ignore
		window.okeWidgetApi.initWidget(widgetContainer.current)
	}

	useEffect(() => {
		if (product?.id) {
			// @ts-ignore
			if (window.okeWidgetApi) {
				initializeReviewsWidget()
			} else {
				document.addEventListener('oke-script-loaded', initializeReviewsWidget)
			}
		}
		return () => {
			document.removeEventListener('oke-script-loaded', initializeReviewsWidget)
		}
	}, [product?.id, widgetContainer?.current])

	useEffect(() => {
		if (handle) {
			findProduct(String(handle))
		}
	}, [handle])

	if (!product?.id || !subscriberId) return null
	return (
		<>
			<Head>
				<meta name="oke:subscriber_id" content={subscriberId} />
				<script src="https://cdn-static.okendo.io/reviews-widget-plus/js/okendo-reviews.js"></script>
			</Head>
			<div
				ref={widgetContainer}
				data-oke-widget
				data-oke-reviews-product-id={`shopify-${getShopifyIdFromGid(
					product?.id
				)}`}
			></div>
		</>
	)
}

export default OkendoReviews

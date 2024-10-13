'use client'

import React from 'react'
import { useCart } from 'frontend-shopify'
import { useAuth } from 'frontend-js'
import { useGTMDispatch } from '@elgorditosalsero/react-gtm-hook'

const useGTM = () => {
	const { cart } = useCart()
	const { currentUser } = useAuth()

	const sendDataToGTM = useGTMDispatch()

	// Helper method to return just the numeric
	// parts of a Shopify GID
	const convertGidToId = (gid) => {
		const parts = gid.split('/')
		const id = parts[parts.length - 1]
		return id
	}

	const trackProductAdded = async ({ variant, quantity, product }) => {
		await sendDataToGTM({
			event: 'add_to_cart',
			ecommerce: {
				items: [
					{
						item_name: product?.title,
						item_id: convertGidToId(product?.id),
						item_variant_id: convertGidToId(variant?.id),
						item_sku: variant?.sku,
						item_url: window.location.href,
						image_url: variant?.image?.url,
						price: variant?.price?.amount,
						quantity: quantity,
						currency: 'USD',
						name: product?.title,
						url: window.location.href,
					},
				],
			},
		})
	}

	const trackRemoveFromCart = ({ variant, quantity, product }) => {
		sendDataToGTM({
			event: 'remove_from_cart',
			ecommerce: [
				{
					cart_id: cart?.id,
					product_id: convertGidToId(product?.id),
					sku: variant?.sku,
					category: product?.productType,
					name: product?.title,
					brand: product?.vendor,
					variant: convertGidToId(variant?.id),
					price: variant?.price?.amount,
					quantity: quantity,
					url: window.location.href,
					image_url: variant?.image?.url,
				},
			],
		})
	}

	const trackCartViewed = (checkout) => {
		const products = checkout.lineItems.edges.map((line) => {
			const variant = line?.node?.variant
			const product = variant?.product

			return {
				product_id: convertGidToId(product?.id),
				sku: variant?.sku,
				name: product?.title,
				price: variant?.price?.amount,
				quantity: line?.node.quantity,
				brand: product?.vendor,
				variant: convertGidToId(variant?.id),
				category: product?.productType,
				url: window.location.href,
				image_url: variant?.image?.src,
			}
		})

		sendDataToGTM({
			event: 'cart_viewed',
			ecommerce: [
				{
					order_id: checkout.id,
					affiliation: 'oneroad',
					value: checkout?.totalPrice?.amount,
					revenue: checkout?.totalPrice?.amount,
					coupon: checkout.discountApplications.edges
						?.map((e) => e?.node)
						.map((node) => node?.code)
						.join(', '),
					currency: checkout?.cost?.totalAmount?.currencyCode,
					products: products,
				},
			],
		})
	}

	const identify = (email) => {
		sendDataToGTM({
			event: 'identify',
			email: email,
		})
	}

	const trackCheckoutStarted = () => {
		if (cart?.lines?.edges.length > 0) {
			const products = cart.lines.edges.map((line) => {
				const variant = line?.node?.merchandise
				const product = variant?.product

				return {
					product_id: convertGidToId(product?.id),
					userId: currentUser?.email,
					sku: variant?.sku,
					name: product?.title,
					price: variant?.price?.amount,
					quantity: line?.node.quantity,
					brand: product?.vendor,
					variant: convertGidToId(variant?.id),
					category: product?.productType,
					url: window.location.href,
					image_url: variant?.image?.src,
				}
			})

			sendDataToGTM({
				event: 'checkout_started',
				ecommerce: [
					{
						order_id: cart.id,
						userId: currentUser?.email,
						value: cart?.cost?.totalAmount?.amount + cart?.cost?.totalTaxAmount,
						revenue: cart?.cost?.totalAmount?.amount,
						shipping: 0,
						tax: cart?.cost?.totalTaxAmount,
						discounts:
							cart?.cost?.subtotalAmount?.amount -
							cart?.cost?.totalAmount?.amount -
							cart?.cost?.totalTaxAmount,
						coupon: cart.discountCodes.join(','),
						currency: cart?.cost?.totalAmount?.currencyCode,
						products: products,
					},
				],
			})
		}
	}

	const trackProductRemoved = (line) => {
		const variant = line?.merchandise
		const product = variant?.product

		sendDataToGTM({
			event: 'remove_from_cart',
			ecommerce: [
				{
					cart_id: cart?.id,
					product_id: convertGidToId(product?.id),
					userId: currentUser?.email,
					sku: variant?.sku,
					category: product?.productType,
					name: product?.title,
					brand: product?.vendor,
					variant: convertGidToId(variant?.id),
					price: variant?.price?.amount,
					quantity: line?.quantity,
					url: window.location.href,
					image_url: variant?.image?.src,
				},
			],
		})
	}

	const trackProductViewed = (product) => {
		const variant = product.variants.edges[0].node

		sendDataToGTM({
			event: 'view_item',
			ecommerce: [
				{
					item_name: product?.title,
					item_id: convertGidToId(product?.id),
					item_variant_id: convertGidToId(variant?.id),
					item_sku: variant?.sku,
					item_url: window.location.href,
					image_url: variant?.image?.url,
					price: variant?.price?.amount,
					currency: 'USD',
					url: window.location.href,
				},
			],
		})
	}

	const trackProductsSearched = (query) => {
		sendDataToGTM({
			event: 'products_search',
			query: query,
		})
	}

	const trackProductClicked = (product) => {
		const variant = product.variants.edges[0].node
		sendDataToGTM({
			event: 'product_clicked',
			ecommerce: [
				{
					product_id: convertGidToId(product?.id),
					sku: product?.variants?.edges[0]?.node?.sku,
					category: product?.productType,
					name: product?.title,
					brand: product?.vendor,
					price: variant?.price?.amount,
					variant: convertGidToId(variant?.id),
					quantity: 1,
					url: `/products/${product?.handle}`,
					image_url: variant?.image?.url,
				},
			],
		})
	}

	const trackProductList = (collection) => {
		if (collection) {
			const products = collection.products.edges.map((line) => {
				const product = line?.node
				const variant = product?.variants?.edges[0].node

				return {
					product_id: convertGidToId(product?.id),
					sku: variant?.sku,
					name: product?.title,
					price: variant?.price?.amount,
					category: product?.productType,
					url: window.location.href,
					image_url: variant?.image?.url,
				}
			})

			sendDataToGTM({
				event: 'product_list_viewed',
				ecommerce: [
					{
						list_id: collection?.id,
						userId: currentUser?.email,
						products: products,
					},
				],
			})
		}
	}

	return {
		sendDataToGTM,
		identify,
		trackProductAdded,
		trackRemoveFromCart,
		trackCartViewed,
		trackProductViewed,
		trackProductRemoved,
		trackProductList,
		trackProductClicked,
		trackProductsSearched,
		trackCheckoutStarted,
	}
}

export default useGTM

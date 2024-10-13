'use client'

import React from 'react'
import {
	ShopifyProvider,
	ShopifyProductProvider,
	ShopifyCollectionProvider,
} from 'frontend-shopify'
import { ShopifyCart } from '../../../components/shopify'

type ShopifyStoreProps = {
	enableShopify?: boolean
	domain?: string
	storefrontAccessToken?: string
	customerPortalUrl?: string
	logo?: string
	shopUrl: string
	children: any
}

const ShopifyStore: React.FC<ShopifyStoreProps> = (props) => {
	const {
		children,
		enableShopify,
		logo,
		domain,
		customerPortalUrl,
		shopUrl,
		storefrontAccessToken,
	} = props

	return enableShopify && domain && storefrontAccessToken ? (
		<ShopifyProvider
			logo={logo}
			domain={domain}
			shopUrl={shopUrl}
			customerPortalUrl={customerPortalUrl}
			storefrontAccessToken={storefrontAccessToken}
		>
			<ShopifyCart />
			<ShopifyProductProvider>
				<ShopifyCollectionProvider>{children}</ShopifyCollectionProvider>
			</ShopifyProductProvider>
		</ShopifyProvider>
	) : (
		children
	)
}

export default ShopifyStore

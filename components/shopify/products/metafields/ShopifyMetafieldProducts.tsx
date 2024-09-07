import React, { useState, useEffect } from 'react'
import { ShopifyProductGrid, ShopifyProductCarousel } from '../../../shopify'
import {
	ProductType,
	getMetafieldReferences,
} from 'frontend-shopify'
import { useProducts } from 'frontend-shopify'

export type ShopifyMetafieldProductsProps = {
	layout?: 'grid' | 'carousel'
	shopifyProduct: any
	href: string
	metafield: string
}

const ShopifyMetafieldProducts: React.FC<ShopifyMetafieldProductsProps> = (props) => {
	const { shopifyProduct, href, layout = 'grid', metafield, ...rest } = props

	const { loading, product, findProduct } = useProducts()
	const [products, setProducts] = useState<ProductType[] | null>(null)

	useEffect(() => {
		if (shopifyProduct && metafield) {
      const metafieldIdentifier = {        
        namespace: metafield?.split('.')[0],
        key: metafield?.split('.')[1],
      }      
			findProduct(shopifyProduct?.handle, [metafieldIdentifier])
		}
	}, [shopifyProduct, metafield])

	useEffect(() => {
		if (product && metafield) {
      const key = metafield?.split('.')[1]
			setProducts(getMetafieldReferences(product, key))
		}
	}, [product, metafield])

	if (!products) return null
	return (
		<>
			{layout == 'grid' && (
				<ShopifyProductGrid href={href} products={products} {...rest} />
			)}
			{layout == 'carousel' && (
				<ShopifyProductCarousel href={href} products={products} {...rest} />
			)}
		</>
	)
}

export default ShopifyMetafieldProducts

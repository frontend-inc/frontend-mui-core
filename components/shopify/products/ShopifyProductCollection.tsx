'use client'

import React, { useEffect, useState } from 'react'
import {
	ProductSortKeyType,
	useCollections,
	useSearchFilters,
} from 'frontend-shopify'
import {
	ShopifyProducts,
	ShopifyProductSortButton,
	ShopifyProductFilterButton,
} from '..'
import { PriceOptionType, SearchFilterOptionType } from 'frontend-shopify'

export type ShopifyProductCollectionProps = {
	href?: string
	handle: string
	options?: SearchFilterOptionType[]
	priceOptions?: PriceOptionType[]
	enableFilters?: boolean
	enableSort?: boolean
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuickShop?: boolean
	enableQuantity?: boolean
	enableOkendoStarRating?: boolean
}

const ShopifyProductCollection: React.FC<ShopifyProductCollectionProps> = (
	props
) => {
	const {
		handle,
		href,
		options = [],
		priceOptions = [],
		enableFilters = false,
		enableSort = false,
		enableBorder = false,
		enableAddToCart = false,
		enableQuickShop = false,
		enableQuantity = false,
		enableOkendoStarRating = false,
	} = props

	const [query, setQuery] = useState<Record<string, any>>({})
	const [sortKey, setSortKey] =
		useState<ProductSortKeyType>('COLLECTION_DEFAULT')
	const [reverse, setReverse] = useState(false)

	const { loading, products, findCollection } = useCollections()

	const { filters, handleFilter, handleFilterArray, formatProductFilters } =
		useSearchFilters()

	const handleSortClick = (sortKey, reverse = false) => {
		setSortKey(sortKey)
		setReverse(reverse)
	}

	useEffect(() => {
		if (query) {
			findCollection(handle, query)
		}
	}, [query])

	useEffect(() => {
		if (handle) {
			let productFilters = formatProductFilters(filters)
			findCollection(handle, {
				...query,
				sortKey,
				reverse,
				filters: productFilters,
			})
		}
	}, [handle, filters, sortKey, reverse])

	return (
		<div className="flex flex-col space-y-2">
			<div className="flex flex-row space-x-2">
				{enableFilters && (
					<ShopifyProductFilterButton
						filters={filters}
						options={options}
						priceOptions={priceOptions}
						handleFilter={handleFilter}
						handleFilterArray={handleFilterArray}
					/>
				)}
				{enableSort && (
					<ShopifyProductSortButton
						sortKey={sortKey}
						reverse={reverse}
						handleClick={handleSortClick}
					/>
				)}
			</div>
			<ShopifyProducts
				href={String(href)}
				loading={loading}
				products={products}
				enableBorder={enableBorder}
				enableAddToCart={enableAddToCart}
				enableQuickShop={enableQuickShop}
				enableQuantity={enableQuantity}
				enableOkendoStarRating={enableOkendoStarRating}
			/>
		</div>
	)
}

export default ShopifyProductCollection

import React, { useState, useEffect } from 'react'
import { Box, Stack } from '@mui/material'
import { ProductSortKeyType, useCollections, useSearchFilters } from 'frontend-shopify'
import {
	ProductGrid,
	ProductSortButton,
  ProductFilterButton,
} from '../../../components/shopify'
import { Heading } from '../../../components'
import { 
  SearchFilterOptionType
} from 'frontend-shopify'

type ProductCollectionProps = {
	title?: string
	editing?: boolean
	handle: string | string[]
  options: SearchFilterOptionType[]
	enableFilters?: boolean
	enableSort?: boolean
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuickShop?: boolean
	enableQuantity?: boolean
	enableOkendoStarRating?: boolean
}

const ProductCollection: React.FC<ProductCollectionProps> = (props) => {
	
  const {
		title,
		handle,
		editing = false,
    options=[],		
    enableFilters = false,
		enableSort = false,
		enableBorder = false,
		enableAddToCart = false,
		enableQuickShop = false,
		enableQuantity = false,
		enableOkendoStarRating = false,
	} = props

	const [query, setQuery] = useState<Record<string, any>>({})
	const [sortKey, setSortKey] = useState<ProductSortKeyType>('COLLECTION_DEFAULT')
	const [reverse, setReverse] = useState(false)

	const {
		loading,
		products,
		findCollection,
	} = useCollections()

  const {		
		filters,
		handleFilter,
    handleFilterArray,		
	} = useSearchFilters()

	const handleSortClick = (sortKey, reverse = false) => {
		setSortKey(sortKey)
		setReverse(reverse)
	}

  // Shopify Storefront API docs
  // https://shopify.dev/docs/custom-storefronts/building-with-the-storefront-api/products-collections/filter-products
  function formatFilters(filters) {
    const query = [];        
    filters.forEach(filter => {
      let queryFilter = {}
      switch (filter.name) {
        case 'tag':
          queryFilter['tag'] = filter.value;          
        break;
      case 'product_type':
        queryFilter['productType'] = filter.value;                  
        break;
      case 'vendor':
        queryFilter['vendor'] = filter.value;                  
        break;
      case 'available':
        queryFilter['vendor'] = filter.value === 'true';                          
        break;
      default:
        queryFilter = {
          variantOption: {
            name: filter.name,
            value: filter.value
          }
        }
      }
      query.push(queryFilter)
    });

    return query;
  }

	useEffect(() => {
		if (query) {
			findCollection(handle, query)
		}
	}, [query])

	useEffect(() => {
		if (handle) {
      let searchFilters = formatFilters(filters)
			findCollection(handle, {
				...query,
				sortKey,
				reverse,
				filters: searchFilters,
			})
		}
	}, [handle, filters, sortKey, reverse])

	return (
		<Stack spacing={2}>			
      <Heading title={ title } />				
			<Stack direction="row" spacing={1}>
        {enableFilters && (
          <ProductFilterButton
            filters={filters}
            options={options}
            handleFilter={ handleFilter }
            handleFilterArray={ handleFilterArray }
          />
        )}
        {enableSort && (
          <ProductSortButton
            sortKey={sortKey}
            reverse={reverse}
            handleClick={handleSortClick}
          />
        )}
			</Stack>
      <ProductGrid
        editing={editing}
        loading={loading}
        products={products}					
        enableBorder={enableBorder}
        enableAddToCart={enableAddToCart}
        enableQuickShop={enableQuickShop}
        enableQuantity={enableQuantity}
        enableOkendoStarRating={enableOkendoStarRating}
      />
		</Stack>
	)
}

export default ProductCollection

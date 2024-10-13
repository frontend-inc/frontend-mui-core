'use client'

import React from 'react'
import { MetafieldAutosuggest } from '../..'
import { MetafieldAutosuggestProps } from './MetafieldAutosuggest'

const ProductMetafieldAutosuggest: React.FC<MetafieldAutosuggestProps> = (
	props
) => {
	return (
		<MetafieldAutosuggest
			{...props}
			query={{
				filters: {
					AND: [
						{
							metafield_type: { eq: 'Product' },
						},
					],
				},
			}}
		/>
	)
}

export default ProductMetafieldAutosuggest

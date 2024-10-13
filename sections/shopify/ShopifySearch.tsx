'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ShopifyProductSearch as ProductSearch } from '../../components/shopify'
import { ShopifyProductSearchProps as ProductSearchProps } from '../../components/shopify/products/ShopifyProductSearch'
import { SectionProps, HeadingProps } from '../../types'

type ShopifySearchProps = SectionProps & HeadingProps & ProductSearchProps

const ShopifySearch: React.FC<ShopifySearchProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		bgColor,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,

		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<ProductSearch {...rest} />
		</Section>
	)
}

export default ShopifySearch

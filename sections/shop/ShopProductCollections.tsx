'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ProductCollectionList } from '../../components'
import { ProductCollectionListProps } from '../../components/shop/product-collections/ProductCollectionList'
import { SectionProps, HeadingProps } from '../../types'

type ShopProductCollectionsProps = SectionProps &
	HeadingProps &
	ProductCollectionListProps

const ShopProductCollections: React.FC<ShopProductCollectionsProps> = (
	props
) => {
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
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
			requireAuth={requireAuth}
			requirePaid={requirePaid}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<ProductCollectionList {...rest} />
		</Section>
	)
}

export default ShopProductCollections

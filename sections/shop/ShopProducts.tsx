'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ProductList } from '../../components'
import { ProductListProps } from '../../components/shop/products/ProductList'
import { SectionProps, HeadingProps } from '../../types'

type ShopProductsProps = SectionProps & HeadingProps & ProductListProps

const ShopProducts: React.FC<ShopProductsProps> = (props) => {
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
			<div className="flex flex-col space-y-2">
				<Heading
					label={label}
					title={title}
					description={description}
					textAlign={textAlign}
				/>
				<ProductList {...rest} />
			</div>
		</Section>
	)
}

export default ShopProducts

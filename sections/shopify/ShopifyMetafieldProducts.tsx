import React from 'react'
import { Section, Heading } from '../../components'
import { MetafieldProducts } from '../../components'
import { MetafieldProductsProps } from '../../components/shopify/products/metafields/MetafieldProducts'
import { SectionProps, HeadingProps } from '../../types'

type ShopifyMetafieldProductsProps = SectionProps &
	HeadingProps &
	MetafieldProductsProps

const ShopifyMetafieldProducts: React.FC<ShopifyMetafieldProductsProps> = (
	props
) => {
	const {
		label,
		title,
		description,
		textAlign,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		requireTeam,
		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
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
			<MetafieldProducts {...rest} />
		</Section>
	)
}

export default ShopifyMetafieldProducts

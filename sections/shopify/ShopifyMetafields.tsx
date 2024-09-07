import React from 'react'
import { Section, Heading } from '../../components'
import { ShopifyMetafields as Metafields } from '../../components'
import { 
  ShopifyProductMetafieldsProps as ProductMetafieldsProps 
} from '../../components/shopify/products/metafields/ShopifyMetafields'
import { SectionProps, HeadingProps } from '../../types'

type ShopifyMetafieldsProps = SectionProps &
	HeadingProps &
	ProductMetafieldsProps

const ShopifyMetafields: React.FC<ShopifyMetafieldsProps> = (props) => {
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
			<Metafields {...rest} />
		</Section>
	)
}

export default ShopifyMetafields

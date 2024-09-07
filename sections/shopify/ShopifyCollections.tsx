import React from 'react'
import { Section, Heading } from '../../components'
import { ShopifyCollections as Collections } from '../../components/shopify'
import { ShopifyCollectionsProps as CollectionProps } from '../../components/shopify/collections/ShopifyCollections'
import { SectionProps, HeadingProps } from '../../types'

type ShopifyCollectionsProps = SectionProps & HeadingProps & CollectionProps

const ShopifyCollections: React.FC<ShopifyCollectionsProps> = (props) => {
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
			<Collections {...rest} />
		</Section>
	)
}

export default ShopifyCollections

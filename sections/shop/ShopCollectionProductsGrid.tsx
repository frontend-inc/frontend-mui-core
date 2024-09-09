import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionProductsGrid } from '../../components/shop'
import { CollectionProductsGridProps } from '../../components/shop/products/CollectionProductsGrid'
import { SectionProps, HeadingProps } from '../../types'

type ShopCollectionProductsGridProps = CollectionProductsGridProps & 
  SectionProps & HeadingProps

const ShopCollectionProductsGrid: React.FC<ShopCollectionProductsGridProps> = (props) => {
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
			<CollectionProductsGrid {...rest} />
		</Section>
	)
}

export default ShopCollectionProductsGrid
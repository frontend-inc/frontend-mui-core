'use client'

import React from 'react'
import { Section } from '../../../components'
import { FieldShopifyProducts } from '../../../components'
import { FieldShopifyProductsProps } from '../../../components/cms/addons/FieldShopifyProducts'
import { SectionProps } from '../../../types'

type CmsShopifyProductProps = SectionProps & FieldShopifyProductsProps

const CmsShopifyProducts: React.FC<CmsShopifyProductProps> = (props) => {
	const {
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
			<FieldShopifyProducts {...rest} />
		</Section>
	)
}

export default CmsShopifyProducts

'use client'

import React from 'react'
import { Section } from '../../../components'
import { FieldShopifyProduct } from '../../../components'
import { FieldShopifyProductProps } from '../../../components/cms/addons/FieldShopifyProduct'
import { SectionProps } from '../../../types'

type CmsShopifyProductProps = SectionProps & FieldShopifyProductProps

const CmsShopifyProduct: React.FC<CmsShopifyProductProps> = (props) => {
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
			<FieldShopifyProduct {...rest} />
		</Section>
	)
}

export default CmsShopifyProduct

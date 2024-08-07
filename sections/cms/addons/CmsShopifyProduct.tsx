import React from 'react'
import { Section } from '../../../components'
import { AddonShopifyProduct } from '../../../components'
import { AddonShopifyProductProps } from '../../../components/cms/addons/AddonShopifyProduct'
import { SectionProps } from '../../../types'

type CmsShopifyProductProps = SectionProps & AddonShopifyProductProps

const CmsShopifyProduct: React.FC<CmsShopifyProductProps> = (props) => {
	const {
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
			<AddonShopifyProduct {...rest} />
		</Section>
	)
}

export default CmsShopifyProduct

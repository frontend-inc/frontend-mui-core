import React from 'react'
import { Section, StripePricingTable } from '../../components'
import { StripePricingTableProps } from '../../components/addons/stripe/StripePricingTable'
import { SectionProps } from '../../types'

type AddonStripePricingTableProps = SectionProps & StripePricingTableProps

const AddonStripePricingTable: React.FC<AddonStripePricingTableProps> = (
	props
) => {
	const {
		bgColor,
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
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<StripePricingTable {...rest} />
		</Section>
	)
}

export default AddonStripePricingTable

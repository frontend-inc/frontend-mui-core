'use client'

import React from 'react'
import { Section } from '../../components'
import { OkendoReviews } from '../../components'
import { OkendoReviewsProps } from '../../components/addons/okendo/OkendoReviews'
import { SectionProps } from '../../types'

type AddonOkendoReviewsProps = SectionProps & OkendoReviewsProps

const AddonOkendoReviews: React.FC<AddonOkendoReviewsProps> = (props) => {
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
			<OkendoReviews {...rest} />
		</Section>
	)
}

export default AddonOkendoReviews

'use client'

import React from 'react'
import { Section } from '../../components'
import { Details } from '../../components'
import { DetailsProps } from '../../components/cms/details/Details'
import { SectionProps } from '../../types'

type CmsDetailsProps = SectionProps & DetailsProps

const CmsDetails: React.FC<CmsDetailsProps> = (props) => {
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
			<Details {...rest} />
		</Section>
	)
}

export default CmsDetails

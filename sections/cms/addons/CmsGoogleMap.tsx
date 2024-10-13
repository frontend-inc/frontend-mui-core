'use client'

import React from 'react'
import { Section, Heading } from '../../../components'
import { FieldGoogleMap } from '../../../components'
import { FieldGoogleMapProps } from '../../../components/cms/addons/FieldGoogleMap'
import { SectionProps, HeadingProps } from '../../../types'

type CmsGoogleMapProps = SectionProps & HeadingProps & FieldGoogleMapProps

const CmsGoogleMap: React.FC<CmsGoogleMapProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
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
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<FieldGoogleMap {...rest} />
		</Section>
	)
}

export default CmsGoogleMap

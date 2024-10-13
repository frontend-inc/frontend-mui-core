'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { Features } from '../../components'
import { FeaturesProps } from '../../components/web/features/Features'
import { SectionProps, HeadingProps } from '../../types'

type UIFeaturesProps = SectionProps & HeadingProps & FeaturesProps

const UIFeatures: React.FC<UIFeaturesProps> = (props) => {
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
				textAlign={'center'}
			/>
			<Features {...rest} />
		</Section>
	)
}

export default UIFeatures

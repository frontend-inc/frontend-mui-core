'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { Featured } from '../../components'
import { FeaturedProps } from '../../components/web/featured/Featured'
import { SectionProps, HeadingProps } from '../../types'

type UIFeaturedProps = SectionProps & HeadingProps & FeaturedProps

const UIFeatured: React.FC<UIFeaturedProps> = (props) => {
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
			<div className="flex flex-col space-y-2">
				<Heading
					label={label}
					title={title}
					description={description}
					textAlign={'center'}
				/>
				<Featured {...rest} />
			</div>
		</Section>
	)
}

export default UIFeatured

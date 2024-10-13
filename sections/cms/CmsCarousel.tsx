'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { CarouselList } from '../../components'
import { CarouselListProps } from '../../components/cms/collections/CarouselList'
import { SectionProps, HeadingProps } from '../../types'

type CmsCarouselProps = SectionProps & HeadingProps & CarouselListProps

const CmsCarousel: React.FC<CmsCarouselProps> = (props) => {
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
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
			requireAuth={requireAuth}
			requirePaid={requirePaid}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<CarouselList {...rest} />
		</Section>
	)
}

export default CmsCarousel

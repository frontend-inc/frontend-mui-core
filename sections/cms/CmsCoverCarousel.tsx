import React from 'react'
import { Section } from '../../components'
import { CarouselCoverList } from '../../components'
import { CarouselListProps } from '../../components/cms/collections/CarouselList'
import { SectionProps } from '../../types'

type CmsCoverCarouselProps = SectionProps & CarouselListProps

const CmsCoverCarousel: React.FC<CmsCoverCarouselProps> = (props) => {
	const { bgColor, py, px, maxWidth, requireAuth, requirePaid, ...rest } = props

	return (
		<Section
			bgColor={'#000000'}
			py={0}
			px={0}
			requireAuth={requireAuth}
			requirePaid={requirePaid}
		>
			<CarouselCoverList {...rest} />
		</Section>
	)
}

export default CmsCoverCarousel

'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { FavoritesGrid } from '../../components'
import { SectionProps, HeadingProps } from '../../types'
import { CollectionListProps } from '../../components/cms/collections/CollectionList'

type CmsFavoritesProps = SectionProps & HeadingProps & CollectionListProps

const CmsFavorites: React.FC<CmsFavoritesProps> = (props) => {
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
			<FavoritesGrid {...rest} />
		</Section>
	)
}

export default CmsFavorites

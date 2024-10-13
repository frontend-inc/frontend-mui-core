'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionList } from '../../components'
import { CollectionListProps } from '../../components/cms/collections/CollectionList'
import { SectionProps, HeadingProps } from '../../types'

type CmsListProps = SectionProps & HeadingProps & CollectionListProps

const CmsList: React.FC<CmsListProps> = (props) => {
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
			<CollectionList {...rest} />
		</Section>
	)
}

export default CmsList

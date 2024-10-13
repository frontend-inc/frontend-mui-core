'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ImageList } from '../../components'
import { ImageListProps } from '../../components/cms/collections/ImageList'
import { SectionProps, HeadingProps, FormProps } from '../../types'

type CmsImagesProps = SectionProps & HeadingProps & ImageListProps & FormProps

const CmsImages: React.FC<CmsImagesProps> = (props) => {
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
			<ImageList {...rest} />
		</Section>
	)
}

export default CmsImages

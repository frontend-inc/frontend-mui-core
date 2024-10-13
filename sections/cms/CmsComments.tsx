'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { CommentList } from '../../components'
import { CommentListProps } from '../../components/social/comments/CommentList'
import { SectionProps, HeadingProps } from '../../types'

type CmsCommentsProps = SectionProps & HeadingProps & CommentListProps

const CmsComments: React.FC<CmsCommentsProps> = (props) => {
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
			<CommentList {...rest} />
		</Section>
	)
}

export default CmsComments

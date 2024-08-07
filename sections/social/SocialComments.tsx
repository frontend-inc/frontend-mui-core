import React from 'react'
import { Section, Heading } from '../../components'
import { Comments } from '../../components'
import { CommentsProps } from '../../components/social/comments/Comments'
import { SectionProps, HeadingProps } from '../../types'

type SocialCommentsProps = SectionProps & HeadingProps & CommentsProps

const SocialComments: React.FC<SocialCommentsProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		requireTeam,
		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
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
			<Comments {...rest} />
		</Section>
	)
}

export default SocialComments

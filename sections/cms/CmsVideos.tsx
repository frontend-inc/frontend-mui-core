import React from 'react'
import { Section, Heading } from '../../components'
import { VideoList } from '../../components'
import { VideoListProps } from '../../components/cms/collections/VideoList'
import { SectionProps, HeadingProps, FormProps } from '../../types'

type CmsVideosProps = SectionProps & HeadingProps & VideoListProps & FormProps

const CmsVideos: React.FC<CmsVideosProps> = (props) => {
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
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<VideoList {...rest} />
		</Section>
	)
}

export default CmsVideos

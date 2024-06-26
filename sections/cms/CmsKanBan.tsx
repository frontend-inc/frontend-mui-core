import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionKanBan } from '../../components'
import { CollectionKanBanProps } from '../../components/cms/collections/CollectionKanBan'
import { SectionProps, HeadingProps } from '../../types'

type CmsKanBanProps = SectionProps & HeadingProps & CollectionKanBanProps

const CmsKanBan: React.FC<CmsKanBanProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		bgcolor,
		py,
		px,
		maxWidth,
		requireAuth,
		requireTeam,
		requirePaid,
		requireAdmin,
    url,
		...rest
	} = props

	return (
		<Section
			bgcolor={bgcolor}
			py={py}
			px={px}
			maxWidth={maxWidth}
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<CollectionKanBan         
        {...rest} 
        url={url}
        searchUrl={url}
      />
		</Section>
	)
}

export default CmsKanBan

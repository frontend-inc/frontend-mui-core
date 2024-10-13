'use client'

import React from 'react'
import { Section } from '../../components'
import { ShowVimeo } from '../../components'
import { ShowVimeoProps } from '../../components/cms/show/ShowVimeo'
import { SectionProps } from '../../types'

type CmsVimeoProps = SectionProps & ShowVimeoProps

const CmsVimeo: React.FC<CmsVimeoProps> = (props) => {
	const {
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
			<ShowVimeo {...rest} />
		</Section>
	)
}

export default CmsVimeo

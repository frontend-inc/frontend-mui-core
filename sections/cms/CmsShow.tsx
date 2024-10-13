'use client'

import React from 'react'
import { Section } from '../../components'
import { Show } from '../../components'
import { ShowProps } from '../../components/cms/show/Show'
import { SectionProps } from '../../types'

type CmsShowProps = SectionProps & ShowProps

const CmsShow: React.FC<CmsShowProps> = (props) => {
	const {
		bgColor,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,

		requirePaid,
		style,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			bgColor={bgColor}
			mode={mode}
			py={style == 'cover' ? 0 : py}
			px={style == 'cover' ? 0 : px}
			maxWidth={maxWidth}
		>
			<Show {...rest} style={style} />
		</Section>
	)
}

export default CmsShow

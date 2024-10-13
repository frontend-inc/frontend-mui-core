'use client'

import React from 'react'
import { Section } from '../../components'
import { CallToAction } from '../../components'
import { CallToActionProps } from '../../components/web/cta/CallToAction'
import { SectionProps } from '../../types'

type UICallToActionProps = SectionProps & CallToActionProps

const UICallToAction: React.FC<UICallToActionProps> = (props) => {
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
			<CallToAction {...rest} />
		</Section>
	)
}

export default UICallToAction

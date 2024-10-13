'use client'

import React from 'react'
import { Section } from '../../components'
import { Profile } from '../../components'
import { ProfileProps } from '../../components/ui/profiles/Profile'
import { SectionProps } from '../../types'

type UIProfileProps = SectionProps & ProfileProps

const UIProfile: React.FC<UIProfileProps> = (props) => {
	const { bgColor, mode, py, px, maxWidth, requireAuth, requirePaid, ...rest } =
		props

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
			<Profile {...rest} />
		</Section>
	)
}

export default UIProfile

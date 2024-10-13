'use client'

import React from 'react'
import { Section } from '../../components'
import { Spotlight } from '../../components'
import { SpotlightProps } from '../../components/ui/spotlights/Spotlight'
import { SectionProps } from '../../types'

type UISpotlightProps = SectionProps & SpotlightProps

const UISpotlight: React.FC<UISpotlightProps> = (props) => {
	const { bgColor, mode, py, px, maxWidth, requireAuth, requirePaid, ...rest } =
		props

	return (
		<Section
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={0}
			maxWidth={maxWidth}
		>
			<Spotlight {...rest} />
		</Section>
	)
}

export default UISpotlight

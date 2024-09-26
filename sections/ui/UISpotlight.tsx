import React from 'react'
import { Section } from '../../components'
import { Spotlight } from '../../components'
import { SpotlightProps } from '../../components/ui/spotlights/Spotlight'
import { SectionProps } from '../../types'

type UISpotlightProps = SectionProps & SpotlightProps

const UISpotlight: React.FC<UISpotlightProps> = (props) => {
	const {
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		requirePaid,
    style,
		...rest
	} = props

  const fullWidth = style == 'spotlight' || style == 'cover' ? true : false

	return (
		<Section
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			mode={'dark'}
			py={0}
			px={0}
			maxWidth={maxWidth}
		>
			<Spotlight {...rest} />
		</Section>
	)
}

export default UISpotlight

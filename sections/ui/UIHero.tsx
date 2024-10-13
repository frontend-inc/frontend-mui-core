'use client'

import React from 'react'
import { Section } from '../../components'
import { Hero } from '../../components'
import { HeroProps } from '../../components/ui/heros/Hero'
import { SectionProps } from '../../types'

type UIHeroProps = SectionProps & HeroProps

const UIHero: React.FC<UIHeroProps> = (props) => {
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

	const fullWidth = style == 'spotlight' || style == 'cover' ? true : false

	return (
		<Section
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			bgColor={bgColor}
			mode={mode}
			py={fullWidth ? 0 : py}
			px={fullWidth ? 0 : px}
			maxWidth={maxWidth}
		>
			<Hero {...rest} style={style} />
		</Section>
	)
}

export default UIHero

'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { Logos } from '../../components'
import { LogosProps } from '../../components/web/logos/Logos'
import { SectionProps, HeadingProps } from '../../types'

type UILogosProps = SectionProps & HeadingProps & LogosProps

const UILogos: React.FC<UILogosProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
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
			py={3}
			px={px}
			maxWidth={maxWidth}
		>
			<div className="flex flex-col space-y-2">
				<Heading
					label={label}
					title={title}
					description={description}
					textAlign={'center'}
				/>
				<Logos {...rest} />
			</div>
		</Section>
	)
}

export default UILogos

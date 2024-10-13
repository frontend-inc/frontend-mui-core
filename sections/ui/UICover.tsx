'use client'

import React from 'react'
import { Section } from '../../components'
import { Cover } from '../../components'
import { CoverProps } from '../../components/web/covers/Cover'
import { SectionProps } from '../../types'

type UICoverProps = SectionProps & CoverProps

const UICover: React.FC<UICoverProps> = (props) => {
	const {
		enableTransitions,
		bgColor,
		mode,
		px,
		py,
		maxWidth,
		requireAuth,
		requirePaid,
		...rest
	} = props

	return (
		<Section
			enableTransitions={enableTransitions}
			mode='dark'
			py={0}
			px={0}
			maxWidth={maxWidth}
		>
			<Cover {...rest} />
		</Section>
	)
}

export default UICover

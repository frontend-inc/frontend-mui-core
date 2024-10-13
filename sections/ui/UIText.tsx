'use client'

import React from 'react'
import { Section } from '../../components'
import { Typography } from '../../tailwind'
import { SectionProps, HeadingProps } from '../../types'

type UITextProps = SectionProps & HeadingProps & { 
  text?: string
}

const UIText: React.FC<UITextProps> = (props) => {
	const { bgColor, mode, py, px, maxWidth, requireAuth, requirePaid, text, ...rest } =
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
			<Typography variant="body1">
        { text }
      </Typography>
		</Section>
	)
}

export default UIText

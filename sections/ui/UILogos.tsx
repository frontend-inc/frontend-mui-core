import React from 'react'
import { Section, Heading } from '../../components'
import { Logos } from '../../components'
import { LogosProps } from '../../components/web/logos/Logos'
import { SectionProps, HeadingProps } from '../../types'
import { Stack } from '@mui/material'

type UILogosProps = SectionProps & HeadingProps & LogosProps

const UILogos: React.FC<UILogosProps> = (props) => {
	const {
    label,
		title,
		description,
		textAlign,
		bgColor,
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
			py={3}
			px={px}
			maxWidth={maxWidth}
		>
      <Stack direction="column" spacing={1}>
        <Heading 
          label={ label }
          title={ title }
          description={ description }
          textAlign={'center'}
        />
			  <Logos {...rest} />
      </Stack>
		</Section>
	)
}

export default UILogos

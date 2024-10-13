'use client'

import React from 'react'
import { Section } from '../../components'
import { ContactForm } from '../../components'
import { ContactFormProps } from '../../components/cms/leads/ContactForm'
import { SectionProps } from '../../types'

type UIContactFormProps = SectionProps & ContactFormProps

const UIContactForm: React.FC<UIContactFormProps> = (props) => {
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
			<ContactForm {...rest} />
		</Section>
	)
}

export default UIContactForm

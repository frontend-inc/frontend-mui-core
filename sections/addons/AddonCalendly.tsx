import React from 'react'
import { Section } from '../../components'
import { Calendly } from '../../components'
import { CalendlyProps } from '../../components/addons/calendly/Calendly'
import { SectionProps } from '../../types'

export type AddonCalendlyProps = SectionProps & CalendlyProps

const AddonCalendly: React.FC<AddonCalendlyProps> = (props) => {
	const {
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
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Calendly {...rest} />
		</Section>
	)
}

export default AddonCalendly

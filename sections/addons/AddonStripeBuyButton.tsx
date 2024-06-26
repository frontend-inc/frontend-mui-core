import React from 'react'
import { Section, StripeBuyButton } from '../../components'
import { StripeBuyButtonProps } from '../../components/addons/stripe/StripeBuyButton'
import { SectionProps } from '../../types'

type AddonStripeBuyButtonProps = SectionProps & StripeBuyButtonProps

const AddonStripeBuyButton: React.FC<AddonStripeBuyButtonProps> = (props) => {
	const {
		bgcolor,
		py,
		px,
		maxWidth,
		requireAuth,
		requireTeam,
		requirePaid,
		requireAdmin,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
			bgcolor={bgcolor}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<StripeBuyButton {...rest} />
		</Section>
	)
}

export default AddonStripeBuyButton

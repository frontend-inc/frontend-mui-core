import React from 'react'
import { Section } from '../../components'
import { CurrentUserFormWizard } from '../../components'
import { CurrentUserFormWizardProps } from '../../components/auth/users/CurrentUserFormWizard'
import { SectionProps } from '../../types'

type AuthUserFormWizardProps = SectionProps & CurrentUserFormWizardProps

const AuthUserFormWizard: React.FC<AuthUserFormWizardProps> = (props) => {
	const { mode, py, px, maxWidth, requireTeam, requirePaid, ...rest } = props

	return (
		<Section
			requireAuth
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<CurrentUserFormWizard {...rest} />
		</Section>
	)
}

export default AuthUserFormWizard

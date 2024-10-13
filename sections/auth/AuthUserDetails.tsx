'use client'

import React from 'react'
import { Section } from '../../components'
import { CurrentUserDetails } from '../../components'
import { CurrentUserDetailsProps } from '../../components/auth/users/CurrentUserDetails'
import { SectionProps } from '../../types'

type AuthUserDetailsProps = SectionProps & CurrentUserDetailsProps

const AuthUserDetails: React.FC<AuthUserDetailsProps> = (props) => {
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
			<CurrentUserDetails {...rest} />
		</Section>
	)
}

export default AuthUserDetails

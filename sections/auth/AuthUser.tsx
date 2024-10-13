'use client'

import React from 'react'
import { Section } from '../../components'
import { CurrentUser } from '../../components'
import { CurrentUserProps } from '../../components/auth/users/CurrentUser'
import { SectionProps } from '../../types'

type AuthUserProps = SectionProps & CurrentUserProps

const AuthUser: React.FC<AuthUserProps> = (props) => {
	const { bgColor, mode, py, px, maxWidth, requireAuth, requirePaid, ...rest } =
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
			<CurrentUser {...rest} />
		</Section>
	)
}

export default AuthUser

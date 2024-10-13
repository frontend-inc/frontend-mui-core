'use client'

import React from 'react'
import { DetailsProps } from '../../cms/details/Details'
import { AuthGuard, Details } from '../..'
import { useAuth } from 'frontend-js'
import { DisplayFieldType } from '../../../types'

export type CurrentUserDetailsProps = DetailsProps & {
	displayFields: DisplayFieldType[]
	url: string
	enableBorder?: boolean
}

const CurrentUserDetails: React.FC<CurrentUserDetailsProps> = (props) => {
	const { currentUser } = useAuth()
	return (
		<AuthGuard requireAuth>
			<Details {...props} resource={currentUser} enableBorder />
		</AuthGuard>
	)
}

export default CurrentUserDetails

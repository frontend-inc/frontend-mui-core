'use client'

import React from 'react'
import { DetailsProps } from '../../cms/details/Details'
import { Details } from '../..'
import { UserType } from 'frontend-js'
import { DisplayFieldType } from '../../../types'

export type UserDetailsProps = DetailsProps & {
	user: UserType
	displayFields: DisplayFieldType[]
	url: string
	enableBorder?: boolean
}

const UserDetails: React.FC<UserDetailsProps> = (props) => {
	const { user } = props
	return <Details {...props} resource={user} enableBorder />
}

export default UserDetails

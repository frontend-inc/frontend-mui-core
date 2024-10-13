'use client'

import React from 'react'
import { RemoteAutosuggest } from '../../../components'
import { SyntheticEventType } from '../../../types'
import { useAdmin } from '../../../hooks'

type UserAutosuggestProps = {
	errors?: any
	name: string
	label: string
	value: any
	placeholder?: string
	direction?: 'row' | 'column'
	displayField?: string
	valueParam?: string
	handleChange: (ev: SyntheticEventType) => void
}

const UserAutosuggest: React.FC<UserAutosuggestProps> = (props) => {
	const { apiUrl } = useAdmin()

	const {
		errors,
		name = 'user_id',
		label,
		value,
		direction = 'column',
		displayField = 'username',
		valueParam = 'id',
		handleChange,
		placeholder = 'Select user',
	} = props || {}

	if (!apiUrl) return null
	return (
		<RemoteAutosuggest
			enableClear
			errors={errors}
			direction={direction}
			name={name}
			label={label}
			value={value}
			displayField={displayField}
			valueParam={valueParam}
			imageField={'avatar.url'}
			url={`${apiUrl}/users`}
			placeholder={placeholder}
			handleChange={handleChange}
		/>
	)
}

export default UserAutosuggest

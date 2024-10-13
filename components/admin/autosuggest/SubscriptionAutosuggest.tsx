'use client'

import React from 'react'
import { RemoteAutosuggest } from '../../../components'
import { QueryParamsType, OptionType } from '../../../types'
import { useAdmin } from '../../../hooks'

type SubscriptionAutosuggestProps = {
	value: any
	name?: string
	query?: QueryParamsType
	label?: string
	placeholder?: string
	handleChange: any
	variants?: string[]
	valueParam?: string
	direction?: 'column' | 'row'
	defaultOptions?: OptionType[]
}

const SubscriptionAutosuggest: React.FC<SubscriptionAutosuggestProps> = (
	props
) => {
	const { apiUrl } = useAdmin()

	const {
		value,
		query = {},
		name = 'stripe_plan_id',
		label,
		placeholder = 'Select subscription',
		handleChange,
		valueParam = 'id',
		direction = 'column',
		defaultOptions = [],
	} = props

	if (!apiUrl) return null
	return (
		<RemoteAutosuggest
			name={name}
			label={label}
			value={value}
			direction={direction}
			valueParam={valueParam}
			displayField={'name'}
			url={`${apiUrl}/subscriptions`}
			placeholder={placeholder}
			handleChange={handleChange}
			defaultQuery={query}
			defaultOptions={defaultOptions}
		/>
	)
}

export default SubscriptionAutosuggest

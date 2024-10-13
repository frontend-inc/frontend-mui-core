'use client'

import React from 'react'
import { RemoteAutosuggest } from '../../../components'
import { useAdmin } from '../../../hooks'

type PageAutosuggestProps = {
	errors?: any
	value: string
	name?: string
	label?: string
	handleChange: (e: any) => void
	query?: any
	valueParam?: string
	direction?: 'row' | 'column'
}

const PageAutosuggest: React.FC<PageAutosuggestProps> = (props) => {
	const { apiUrl } = useAdmin()

	const {
		errors,
		value,
		name = 'page_id',
		label,
		handleChange,
		query,
		valueParam = 'id',
		direction = 'column',
	} = props

	return (
		<RemoteAutosuggest
			direction={direction}
			errors={errors}
			name={name}
			label={label}
			value={value || ''}
			displayField="title"
			valueParam={valueParam}
			url={`${apiUrl}/pages`}
			placeholder="Select page"
			handleChange={handleChange}
			defaultQuery={query}
			enableClear
		/>
	)
}

export default PageAutosuggest

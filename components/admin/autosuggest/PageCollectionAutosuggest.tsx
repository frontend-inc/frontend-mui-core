'use client'

import React from 'react'
import { RemoteAutosuggest } from '../../../components'
import { useAdmin } from '../../../hooks'

type PageCollectionAutosuggestProps = {
	errors?: any
	value: string
	name?: string
	label?: string
	handleChange: (e: any) => void
	query?: any
	valueParam?: string
	direction?: 'row' | 'column'
	collectionId: string
}

const PageCollectionAutosuggest: React.FC<PageCollectionAutosuggestProps> = (
	props
) => {
	const { apiUrl } = useAdmin()

	const {
		collectionId,
		errors,
		value,
		name = 'page_id',
		label,
		handleChange,
		query,
		valueParam = 'id',
		direction = 'column',
	} = props

	if (!collectionId) return null
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
			defaultQuery={{
				filters: {
					AND: [
						{ collection_id: { eq: collectionId } },
						{
							page_type: { eq: 'cms' },
						},
					],
				},
			}}
			enableClear
		/>
	)
}

export default PageCollectionAutosuggest

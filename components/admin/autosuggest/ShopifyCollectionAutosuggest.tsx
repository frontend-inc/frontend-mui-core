'use client'

import React, { useEffect, useState } from 'react'
import { Autosuggest } from '../../../components'
import { SyntheticEventType } from '../../../types'
import { useCollections } from 'frontend-shopify'

type AutosuggestProps = {
	value?: any
	name?: string
	label?: string
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void
	enableDelete?: boolean
	direction?: 'row' | 'column'
}

const CollectionAutosuggest: React.FC<AutosuggestProps> = (props) => {
	const {
		value,
		label,
		name = 'shopify_handle',
		placeholder,
		handleChange,
		direction = 'column',
	} = props

	const [options, setOptions] = useState([])
	const { collections, findCollections } = useCollections()

	useEffect(() => {
		if (collections) {
			setOptions(
				collections?.map((collection) => ({
					label: collection?.title,
					value: collection?.handle,
					image: collection?.image?.url,
				}))
			)
		}
	}, [collections])

	useEffect(() => {
		findCollections(100)
	}, [])

	return (
		<Autosuggest
			label={label}
			name={name}
			value={value}
			options={options}
			placeholder={placeholder}
			handleChange={handleChange}
			enableClear
		/>
	)
}

export default CollectionAutosuggest

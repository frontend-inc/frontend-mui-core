import React, { useEffect, useState } from 'react'
import { useResource } from 'frontend-js'
import { Autosuggest } from '../..'
import { useError } from '../../../hooks'
import { OptionType, QueryParamsType, SyntheticEventType } from '../../../types'
import { get } from 'lodash'

export type RemoteAutosuggestProps = {
	errors?: any
	value?: any
	label?: string
	name: string
	url: string
	handleChange: (event: SyntheticEventType) => void
	handleClear?: () => void
	displayField?: string
	valueParam?: string
	placeholder?: string
	imageField?: string
	direction?: 'row' | 'column'
	defaultQuery?: QueryParamsType
	defaultOptions?: OptionType[]
	enableRemoteSearch?: boolean
	enableClear?: boolean
	perPage?: number
}

const RemoteAutosuggest: React.FC<RemoteAutosuggestProps> = (props) => {
	const {
		errors,
		value,
		label,
		name,
		url,
		displayField,
		imageField,
		handleChange,
		handleClear,
		valueParam = 'id',
		placeholder = 'Search',
		defaultQuery = {},
		direction = 'column',
		defaultOptions = [],
		enableRemoteSearch = false,
		enableClear = false,
		perPage = 100,
	} = props

	const { error, clearError } = useError({
		errors: errors,
		name: name,
	})

	const { loading, delayedLoading, resources, findMany } = useResource({
		url: url,
		name: name,
	})

	const [option, setOption] = useState<OptionType>()
	const [options, setOptions] = useState<OptionType[]>([])

	const handleInputChange = (newValue) => {
		if (error) clearError()
		findOption(newValue)

		if (enableRemoteSearch && !loading) {
			//@ts-ignore
			findMany({
				...defaultQuery,
				keywords: newValue,
			})
		}
	}

	const formatResources = (resources) => {
		if (!displayField) return []
		return resources.map((resource) => ({
			label: get(resource, displayField),
			value: get(resource, valueParam),
			image: imageField ? get(resource, imageField) : null,
		}))
	}

	const findOption = async (value) => {
		if (!value) return null
		let resource = resources.find((resource) => resource[displayField] == value)
		if (resource) {
			setOption({
				label: get(resource, displayField),
				value: get(resource, valueParam),
			})
		}
	}

	useEffect(() => {
		if (resources) {
			setOptions([...formatResources(resources), ...defaultOptions])
		}
	}, [resources])

	useEffect(() => {
		if (value && resources?.length > 0) {
			let resource = resources.find(
				(resource) => get(resource, valueParam) == value
			)
			if (resource) {
				setOption({
					label: get(resource, displayField),
					value: get(resource, valueParam),
				})
			}
		}
	}, [value, resources])

	useEffect(() => {
		if (url) {
			//@ts-ignore
			findMany({
				...defaultQuery,
				per_page: perPage,
			})
		}
	}, [url])

	useEffect(() => {
		if (Object.keys(defaultQuery)?.length > 0 && url) {
			//@ts-ignore
			findMany({
				...defaultQuery,
				per_page: perPage,
			})
		}
	}, [defaultQuery])

	if (!displayField) return null
	return (
		<Autosuggest
			errors={errors}
			loading={delayedLoading}
			direction={direction}
			label={label}
			name={name}
			value={option}
			options={options}
			placeholder={placeholder}
			handleChange={handleChange}
			handleInputChange={handleInputChange}
			handleClear={handleClear}
			enableClear={enableClear}
		/>
	)
}

export default RemoteAutosuggest

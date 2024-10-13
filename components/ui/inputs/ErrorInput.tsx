'use client'

import React, { useEffect } from 'react'
import { ErrorText } from '../../../components'
import { useError } from '../../../hooks'

// The purpose of this component is to render
// server-side errors for custom input fields
// that do not have this error handling
type ErrorInputProps = {
	name: string
	value?: any
	errors: any
}

const ErrorInput: React.FC<ErrorInputProps> = (props) => {
	const { name, value = '', errors } = props

	const { error, clearError } = useError({
		errors,
		name,
	})

	useEffect(() => {
		if (error) clearError()
	}, [value])

	if (!error) return null
	return <ErrorText error={error} />
}

export default ErrorInput

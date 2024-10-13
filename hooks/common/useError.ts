'use client'

import React, { useEffect, useState } from 'react'

type UseErrorProps = {
	errors: Record<string, string>
	name: string
}

const useError = (props: UseErrorProps) => {
	const { errors, name } = props
	const [error, setError] = useState<string>()

	const clearError = () => {
		setError(null)
	}

	useEffect(() => {
		if (errors && errors[name]) {
			setError(`${name} ${errors[name]}`)
		}
	}, [errors])

	return {
		error,
		clearError,
	}
}

export default useError

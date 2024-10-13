'use client'

import React, { useRef, useEffect } from 'react'

type UsePreviousProps = {
	value: any
}

const usePrevious = (value: UsePreviousProps) => {
	const ref = useRef<any>()
	// Store current value in ref
	useEffect(() => {
		ref.current = value
	}, [value])

	return ref.current
}

export default usePrevious

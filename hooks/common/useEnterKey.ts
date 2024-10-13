'use client'

import React, { useEffect } from 'react'

type UseEnterKeyProps = {
	onEnter: () => void
	skip?: boolean
}
// Helper hook to run a function on Enter key press
const useEnterKey = (props: UseEnterKeyProps) => {
	const { onEnter, skip = false } = props
	const handleKeyPress = (ev) => {
		if (ev.key == 'Enter') {
			onEnter()
		}
	}

	useEffect(() => {
		if (!skip) {
			window.addEventListener('keydown', handleKeyPress)
			return () => {
				window.removeEventListener('keydown', handleKeyPress)
			}
		}
	}, [onEnter, skip])

	return
}

export default useEnterKey

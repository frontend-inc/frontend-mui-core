'use client'

import React, { useEffect } from 'react'

// Helper hook to run a function on Enter key press
const useEscapeKey = (onEscape: () => void) => {
	useEffect(() => {
		const handleKeyPress = (ev) => {
			if (ev.key === 'Escape') {
				if (onEscape) onEscape()
			}
		}
		window.addEventListener('keydown', handleKeyPress)
		return () => {
			window.removeEventListener('keydown', handleKeyPress)
		}
	}, [onEscape])

	return
}

export default useEscapeKey

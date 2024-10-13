'use client'

import React, { useEffect, useState } from 'react'

const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState({
		x: 0,
		y: 0,
	})

	const handleScroll = () => {
		setScrollPosition({
			x: window.scrollX,
			y: window.scrollY,
		})
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return {
		position: scrollPosition,
	}
}

export default useScrollPosition

'use client'

import React, { useState } from 'react'

type ClickDragProps = {
	onClick?: (ev: any) => void
	onDrag?: () => void
}

// Determine if the user is swiping or clicking,
// and prevent images from being dragged in carousels
export default function useClickOrDrag(props: ClickDragProps) {
	const { onClick, onDrag } = props || {}

	const DELTA_PIXELS = 6
	const [posX, setPosX] = useState(0)

	const onMouseUp = (e) => {
		if (e.clientX < posX + DELTA_PIXELS && e.clientX > posX - DELTA_PIXELS) {
			onClick ? onClick(e) : null
		} else {
			onDrag ? onDrag() : null
		}
	}

	const onMouseDown = (e) => {
		e.preventDefault()
		setPosX(e.clientX)
	}

	return {
		onMouseDown,
		onMouseUp,
	}
}

'use client'

import React, { useState } from 'react'

const useMenu = (anchorRef?: React.RefObject<any>) => {
	const [open, setOpen] = useState(false)
	const [anchorEl, setAnchorEl] = useState(null)

	const toggleMenu = (ev?: any) => {
		if (ev) {
			setAnchorEl(ev.currentTarget)
		}
		setOpen(!open)
	}

	const closeMenu = () => {
		setOpen(false)
	}

	const openMenu = (ev?: any) => {
		if (ev) {
			setAnchorEl(anchorRef ? anchorRef.current : ev.currentTarget)
		}
		setOpen(true)
	}

	return {
		open,
		anchorEl,
		closeMenu,
		openMenu,
		toggleMenu,
	}
}

export default useMenu

'use client'

import React, { useContext } from 'react'
import { AdminContext } from '../../context'

const useAdmin = () => {
	const {
		apiUrl,
		clientUrl,
		loading,
		setLoading,
		leftTab,
		setLeftTab,
		rightTab,
		setRightTab,
		openLayoutLeft,
		setOpenLayoutLeft,
		openLayoutRight,
		setOpenLayoutRight,
		toggleLayoutRight,
	} = useContext(AdminContext)

	return {
		apiUrl,
		clientUrl,
		loading,
		setLoading,
		leftTab,
		setLeftTab,
		rightTab,
		setRightTab,
		openLayoutLeft,
		setOpenLayoutLeft,
		openLayoutRight,
		setOpenLayoutRight,
		toggleLayoutRight,
	}
}

export default useAdmin

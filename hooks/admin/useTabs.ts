'use client'

import React, { useEffect, useContext } from 'react'
import { AdminContext } from '../../context'

const useTabs = (tab: string) => {
	const { activeTab, setActiveTab } = useContext(AdminContext)

	useEffect(() => {
		if (tab) {
			setActiveTab(tab)
		}
	}, [tab])

	return {
		activeTab,
		setActiveTab,
	}
}

export default useTabs

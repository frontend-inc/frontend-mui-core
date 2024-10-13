'use client'

import React, { useState } from 'react'
import AdminContext from './AdminContext'

type AdminProviderProps = {
	apiUrl: string
	clientUrl: string
	children: React.ReactNode
}

const AdminProvider: React.FC<AdminProviderProps> = (props) => {
	const { children, apiUrl, clientUrl } = props

	const [app, setApp] = useState()
	const [loading, setLoading] = useState(false)
	const [openMenu, setOpenMenu] = useState(false)

	const [openLayoutLeft, setOpenLayoutLeft] = useState(true)
	const [openLayoutRight, setOpenLayoutRight] = useState(true)

	const [activeTab, setActiveTab] = useState(false)
	const [leftTab, setLeftTab] = useState(0)
	const [rightTab, setRightTab] = useState(0)

	const toggleLayoutLeft = () => setOpenLayoutLeft(!openLayoutLeft)

	const toggleLayoutRight = () => setOpenLayoutRight(!openLayoutRight)

	const value = {
		loading,
		setLoading,

		app,
		setApp,

		apiUrl,
		clientUrl,

		activeTab,
		setActiveTab,

		leftTab,
		setLeftTab,
		rightTab,
		setRightTab,

		openMenu,
		setOpenMenu,

		openLayoutLeft,
		setOpenLayoutLeft,
		toggleLayoutLeft,

		openLayoutRight,
		setOpenLayoutRight,
		toggleLayoutRight,
	}

	return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
}

export default AdminProvider

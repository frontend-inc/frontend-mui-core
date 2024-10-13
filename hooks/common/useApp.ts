'use client'

import React, { useContext } from 'react'
import { AppContext } from '../../context'

const useApp = () => {
	const {
		app,
		setApp,
		logo,
		apiUrl,
		clientUrl,
		enableShopify,
		enableStripe,
		alert,
		setAlert,
		authOpen,
		setAuthOpen,
		myAccountOpen,
		setMyAccountOpen,
		menuOpen,
		setMenuOpen,
		loading,
		loaded,
		setLoaded,
		setLoading,
	} = useContext(AppContext)

	return {
		app,
		setApp,
		logo,
		apiUrl,
		clientUrl,
		enableShopify,
		enableStripe,
		alert,
		setAlert,
		authOpen,
		setAuthOpen,
		menuOpen,
		setMenuOpen,
		myAccountOpen,
		setMyAccountOpen,
		loading,
		loaded,
		setLoaded,
		setLoading,
	}
}

export default useApp

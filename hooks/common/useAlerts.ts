'use client'

import React, { useContext } from 'react'
import { AppContext } from '../../context'

const useAlerts = () => {
	const { setAlert } = useContext(AppContext)

	const showAlertError = (message) => setAlert({ message, variant: 'error' })
	const showAlertWarning = (message) =>
		setAlert({ message, variant: 'warning' })
	const showAlertSuccess = (message) =>
		setAlert({ message, variant: 'success' })

	return {
		showAlertError,
		showAlertWarning,
		showAlertSuccess,
	}
}

export default useAlerts

'use client'

import React, { useEffect, useContext } from 'react'
import { AppContext } from '../../context'
import { toast, Toaster } from 'sonner'

export type AlertProps = {
	anchorBottom?: boolean
}

const Alert: React.FC<AlertProps> = (props) => {
	const { alert, setAlert } = useContext(AppContext)

	useEffect(() => {
		if (alert && alert?.message) {
			toast(alert?.status, {
				description: alert?.message,
				action: {
					label: 'Close',
					onClick: () => setAlert(null),
				},
			})
		}
	}, [alert])

	return <Toaster />
}

export default Alert

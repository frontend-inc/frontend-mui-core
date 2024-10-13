'use client'

import React from 'react'
import { useAuth } from 'frontend-js'
import { UserMenu } from '../..'
import { useRouter, useParams } from 'next/navigation'

type AdminAuthButtonProps = {
	handleClick: () => void
}

const AdminAuthButton: React.FC<AdminAuthButtonProps> = (props) => {
	const { handleClick } = props || {}
	const router = useRouter()
	const { logout, currentUser } = useAuth()

	const handleLogoutClick = () => {
		logout()
		router.push('/')
	}

	if (!currentUser) return null
	return (
		<UserMenu handleLogoutClick={handleLogoutClick} handleClick={handleClick} />
	)
}

export default AdminAuthButton

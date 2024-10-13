'use client'

import React from 'react'
import { useAuth } from 'frontend-shopify'
import { UserMenu } from '../..'
import { useRouter, useParams } from 'next/navigation'
import { useApp } from '../../../hooks'

const ShopifyAuthButton: React.FC = () => {
	const router = useRouter()

	const { logout, customer } = useAuth()
	const { clientUrl, setMyAccountOpen } = useApp()

	const handleClick = () => {
		setMyAccountOpen(true)
	}

	const handleLogoutClick = () => {
		logout()
		router.push(`${clientUrl}/shopify/login`)
	}

	if (!customer) return null
	return (
		<UserMenu handleLogoutClick={handleLogoutClick} handleClick={handleClick} />
	)
}

export default ShopifyAuthButton

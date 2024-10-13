'use client'

import React, { useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { AuthScreen, MyAccountForm } from '../..'
import { useRouter, useParams } from 'next/navigation'

type MyAccountProps = {
	redirectUrl: string
}

const MyAccount: React.FC<MyAccountProps> = (props) => {
	const router = useRouter()
	const { redirectUrl } = props || {}

	const {
		loading,
		user,
		fetchMe,
		currentUser,
		updateMe,
		handleChange,
		logout,
		deleteAvatar,
	} = useAuth()

	const handleDeleteAvatar = async () => {
		await deleteAvatar()
	}

	const handleSubmit = async () => {
		await updateMe(user)
	}

	const handleLogout = async () => {
		await logout()
		router.push(redirectUrl)
	}

	useEffect(() => {
		if (!currentUser?.id) {
			fetchMe()
		}
	}, [currentUser?.id])

	return (
		<>
			{currentUser && (
				<AuthScreen
					title={`${currentUser?.first_name} ${currentUser?.last_name}`}
					subtitle={
						currentUser?.username
							? `@${currentUser?.username}`
							: 'Update account'
					}
				>
					<MyAccountForm
						loading={loading}
						user={user}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
						handleDeleteAvatar={handleDeleteAvatar}
						handleLogout={handleLogout}
					/>
				</AuthScreen>
			)}
		</>
	)
}

export default MyAccount

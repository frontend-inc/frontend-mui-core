'use client'

import React, { useEffect } from 'react'
import { Button, Typography, IconButton } from '../../../tailwind'
import { useMenu, useApp } from '../../../hooks'
import { useAuth } from 'frontend-js'
import { useRouter, useParams } from 'next/navigation'
import { Icon, UserAvatar, AuthMenu } from '../..'

type AuthButtonProps = {
	showLabel?: boolean
	showIcon?: boolean
}

const AuthButton: React.FC<AuthButtonProps> = (props) => {
	const { showLabel = false, showIcon = true } = props || {}

	const router = useRouter()
	const { logout, fetchMe, currentUser } = useAuth()
	const { open, anchorEl, closeMenu, toggleMenu } = useMenu()

	const { clientUrl, setAuthOpen, setMyAccountOpen } = useApp()

	const handleLogin = () => {
		setAuthOpen(true)
		closeMenu()
	}

	const handleSignup = () => {
		setAuthOpen(true)
		closeMenu()
	}

	const handleMyAccount = () => {
		setMyAccountOpen(true)
		closeMenu()
	}

	const handleLogout = async () => {
		await logout()
		router.push(clientUrl)
	}

	const handleClick = (url) => {
		closeMenu()
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		router.push(url)
	}

	useEffect(() => {
		if (!currentUser?.id) {
			fetchMe()
		}
	}, [currentUser?.id])

	return (
		<>
			{!showLabel ? (
				<>
					{currentUser?.id ? (
						<IconButton onClick={toggleMenu}>
							<UserAvatar user={currentUser} />
						</IconButton>
					) : (
						<IconButton onClick={handleLogin}>
							<Icon name="User" size={24} />
						</IconButton>
					)}
				</>
			) : (
				<>
					{currentUser?.id ? (
						<Button
							onClick={toggleMenu}
							startIcon={showIcon && <UserAvatar user={currentUser} />}
							endIcon={
								<div>
									<Icon name="MoreVertical" />
								</div>
							}
						>
							<Typography variant="body1" color="text.primary">
								{currentUser?.username}
							</Typography>
						</Button>
					) : (
						<Button
							onClick={handleLogin}
							startIcon={showIcon && <Icon name="User" size={24} />}
						>
							Sign In
						</Button>
					)}
				</>
			)}
			{currentUser && (
				<AuthMenu
					open={open}
					anchorEl={anchorEl}
					toggleMenu={toggleMenu}
					handleLogin={handleLogin}
					handleSignup={handleSignup}
					handleMyAccount={handleMyAccount}
					handleLogout={handleLogout}
					handleClick={handleClick}
				/>
			)}
		</>
	)
}

export default AuthButton

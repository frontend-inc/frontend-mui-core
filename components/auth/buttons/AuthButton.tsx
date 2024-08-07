import React, { useContext, useEffect } from 'react'
import { Button, Typography, Box, IconButton } from '@mui/material'
import { useMenu } from '../../../hooks'
import { useAuth } from 'frontend-js'
import { useRouter } from 'next/router'
import { Icon, UserAvatar, AuthMenu } from '../..'
import { AppContext } from '../../../context'

type AuthButtonProps = {
	showLabel?: boolean
	showIcon?: boolean
	editing?: boolean
}

const AuthButton: React.FC<AuthButtonProps> = (props) => {
	const { showLabel = false, showIcon = true, editing = false } = props || {}

	const router = useRouter()
	const { logout, fetchMe, currentUser } = useAuth()
	const { open, anchorEl, closeMenu, toggleMenu } = useMenu()

	const { clientUrl, setAuthOpen, setMyAccountOpen } = useContext(AppContext)

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
		if (!editing) {
			router.push(url)
		}
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
							<Icon color="primary.contrastText" name="User" size={24} />
						</IconButton>
					)}
				</>
			) : (
				<>
					{currentUser ? (
						<Button
							sx={sx.button}
							onClick={toggleMenu}
							startIcon={showIcon && <UserAvatar user={currentUser} />}
							endIcon={
								<Box>
									<Icon name="MoreVertical" size={20} />
								</Box>
							}
						>
							<Typography variant="body1" color="text.primary" sx={sx.username}>
								{currentUser?.username}
							</Typography>
						</Button>
					) : (
						<Button
							sx={sx.button}
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

const sx = {
	expandMore: {
		width: '34px',
	},
	icon: {
		color: 'text.primary',
	},
	button: {
		boxShadow: 0,
		width: '100%',
		color: 'text.primary',
		justifyContent: 'flex-start',
	},
	username: {
		width: '100%',
		textAlign: 'left',
	},
}

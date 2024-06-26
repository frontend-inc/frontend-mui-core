import React, { useContext } from 'react'
import { Box } from '@mui/material'
import { AppContext } from '../../../context'
import MobileDrawer from './MobileDrawer'
import MobileTopNav from './MobileTopNav'
import DesktopTopNav from './DesktopTopNav'
import DesktopSideNav from './DesktopSideNav'
import { MenuLinkType } from '../../../types'

type HeaderProps = {
	editing?: boolean
	sideNav?: boolean
	mode?: 'accent' | 'light' | 'dark'
	logo?: string
	enableAuth?: boolean
	enableStripe?: boolean
	enableShopify?: boolean
	enableNotifications?: boolean
	bgcolor?: string
	menuItems: MenuLinkType[]
	handleClick: (path: string) => void
}

const Header: React.FC<HeaderProps> = (props) => {
	const { logo } = useContext(AppContext)
	const {
		sideNav = false,
		editing = false,
		menuItems,
		handleClick,
		enableAuth = false,
		enableStripe = false,
		enableShopify = false,
		enableNotifications = false,
	} = props

	return (
		<Box
			sx={{
				...sx.root,
				...(sideNav && sx.rootSideNav),
			}}
		>
			{!sideNav ? (
				<DesktopTopNav
					editing={editing}
					logo={logo}
					enableAuth={enableAuth}
					enableStripe={enableStripe}
					enableShopify={enableShopify}
					enableNotifications={enableNotifications}
					menuItems={menuItems}
					handleClick={handleClick}
				/>
			) : (
				<DesktopSideNav
					editing={editing}
					logo={logo}
					enableAuth={enableAuth}
					enableStripe={enableStripe}
					enableShopify={enableShopify}
					enableNotifications={enableNotifications}
					menuItems={menuItems}
					handleClick={handleClick}
				/>
			)}
			<MobileTopNav
				editing={editing}
				logo={logo}
				enableShopify={enableShopify}
				enableNotifications={enableNotifications}
				menuItems={menuItems}
				handleClick={handleClick}
			/>
			<MobileDrawer
				editing={editing}
				enableAuth={enableAuth}
				enableStripe={enableStripe}
				enableShopify={enableShopify}
				menuItems={menuItems}
				handleClick={handleClick}
			/>
		</Box>
	)
}

export default Header

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		overflow: 'hidden',
		bgcolor: 'background.default',
	},
	rootSideNav: {
		width: {
			md: '280px',
			xs: '100%',
		},
		minWidth: {
			md: '280px',
			xs: '100%',
		},
	},
}

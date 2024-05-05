import React from 'react'
import { AppBar, Box, Hidden, Toolbar } from '@mui/material'
import { AuthButton } from '../../../components'
import Logo from './Logo'
import { ShopifyAuth, SearchButton, CartButton } from '../../shopify'
import { useAuth } from 'frontend-js'
import { MenuLinkType } from '../../..'
import TopNavMenuItem from './TopNavMenuItem'

type DesktopNavProps = {
	editing?: boolean
	logo: string
	menuItems?: MenuLinkType[]
	enableAuth?: boolean
	enableShopify?: boolean
	enableNotifications?: boolean
	handleClick: (path: string) => void
	position?: 'fixed' | 'relative' | 'absolute'
}

const DesktopTopNav = (props: DesktopNavProps) => {
	const {
		editing,
		logo,
		menuItems,
		handleClick,
		enableAuth = false,
		enableShopify = false,
		enableNotifications = false,
		position = 'absolute',
	} = props

	const { currentUser } = useAuth()

  const filterVisibility = (menuItem) => {
    if (menuItem.visibility === 'logged_in' && !currentUser?.id) {
      return false
    }
    if (menuItem.visibility === 'logged_out' && currentUser?.id) {
      return false
    }
    return true  
  }

	return (
		<Hidden mdDown>
			<AppBar
				sx={{
					...sx.appBar,
					...(enableNotifications && sx.appBarNotifications),
				}}
				position={position}
				elevation={0}
			>
				<Toolbar>
					<Box sx={sx.desktopTopNav}>
						<Box sx={sx.leftMenu}>
							<Logo
								src={logo}
								width={120}
								height={40}
								handleClick={() => handleClick('/')}
							/>
						</Box>
						<Box sx={sx.centerMenu}>
							{menuItems
								?.filter((menuItem) => menuItem.parent_id == null)
								?.filter(filterVisibility)
								?.map((menuItem, index) => (
									<TopNavMenuItem
										key={index}
										menuItem={menuItem}
										handleClick={handleClick}
									/>
								))}
						</Box>
						<Box sx={sx.rightMenu}>
							{enableAuth && <AuthButton editing={editing} />}
							{enableShopify && (
								<>
									<ShopifyAuth />
									<SearchButton />
									<CartButton />
								</>
							)}
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
		</Hidden>
	)
}

export default DesktopTopNav

const sx = {
	appBar: {
		height: 64,
		position: 'absolute',
		zIndex: (theme) => theme.zIndex.appBar,
		bgcolor: 'background.default',
	},
	appBarNotifications: {
		position: 'absolute',
		top: 40,
	},
	desktopTopNav: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
	},
	leftMenu: {
		width: '200px',
		height: '60px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	centerMenu: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '60px',
	},
	rightMenu: {
		width: '200px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		height: '60px',
	},
}

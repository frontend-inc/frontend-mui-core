import React from 'react'
import {
	Button,
	List,
	ListItem,
	ListItemIcon,
	ListItemButton,
	ListItemText,
} from '@mui/material'
import { AuthScreen, Placeholder } from '../..'
import { useAuth } from 'frontend-shopify'
import { useRouter } from 'next/router'
import { User, ShoppingCart, MapPin, LogOut } from 'lucide-react'
import { useApp } from '../../../hooks'

type MenuItemProps = {
	item: {
		label: string
		path: string
		icon?: React.ReactElement
	}
	handleClick: (path: string) => void
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
	const { item, handleClick } = props || {}
	return (
		<ListItem disablePadding>
			<ListItemButton onClick={() => handleClick(item?.path)}>
				<ListItemIcon>{item.icon}</ListItemIcon>
				<ListItemText primary={item.label} />
			</ListItemButton>
		</ListItem>
	)
}

type ShopifyCustomerAccountProps = {
	title?: string
	subtitle?: string
	loginUrl?: string
}

const MENU_ITEMS = [
	{
		label: 'Account Details',
		path: '/shopify/customer',
		icon: <User />,
	},
	{
		label: 'Addresses',
		path: '/shopify/addresses',
		icon: <MapPin />,
	},
	{
		label: 'Order History',
		path: '/shopify/orders',
		icon: <ShoppingCart />,
	},
	{
		label: 'Sign Out',
		path: '/logout',
		icon: <LogOut />,
	},
]

const ShopifyCustomerAccount: React.FC<ShopifyCustomerAccountProps> = (
	props
) => {
	const {
		loginUrl,
		title = 'My Account',
		subtitle = 'Manage your account',
	} = props || {}

	const router = useRouter()
	const { clientUrl } = useApp()

	const { customer } = useAuth()

	const handleLogin = () => {
		if (loginUrl) router.push(loginUrl)
	}

	const handleClick = (path: string) => {
		router.push(`${clientUrl}${path}`)
	}

	return (
		<AuthScreen title={title} subtitle={subtitle}>
			{customer ? (
				<List disablePadding>
					{MENU_ITEMS.map((item, i) => (
						<MenuItem key={i} item={item} handleClick={handleClick} />
					))}
				</List>
			) : (
				<Placeholder
					title="Please sign in."
					description="You must be signed in to manage your account."
					buttons={<Button onClick={handleLogin}>Sign In</Button>}
				/>
			)}
		</AuthScreen>
	)
}

export default ShopifyCustomerAccount

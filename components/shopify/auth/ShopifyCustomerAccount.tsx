'use client'

import React from 'react'
import { Button } from '../../../shadcn/ui/button'
import { AuthScreen, Placeholder } from '../..'
import { useAuth } from 'frontend-shopify'
import { useRouter, useParams } from 'next/navigation'
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
		<li>
			<Button
				variant="ghost"
				className="w-full justify-start"
				onClick={() => handleClick(item?.path)}
			>
				{item.icon && <span className="mr-2">{item.icon}</span>}
				{item.label}
			</Button>
		</li>
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
		icon: <User className="h-4 w-4" />,
	},
	{
		label: 'Addresses',
		path: '/shopify/addresses',
		icon: <MapPin className="h-4 w-4" />,
	},
	{
		label: 'Order History',
		path: '/shopify/orders',
		icon: <ShoppingCart className="h-4 w-4" />,
	},
	{
		label: 'Sign Out',
		path: '/logout',
		icon: <LogOut className="h-4 w-4" />,
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
				<ul className="space-y-1">
					{MENU_ITEMS.map((item, i) => (
						<MenuItem key={i} item={item} handleClick={handleClick} />
					))}
				</ul>
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

import React, { useContext } from 'react'
import { Badge, IconButton } from '@mui/material'
import {
	ListItem,
	ListItemText,
	ListItemButton,
	Typography,
} from '@mui/material'
import { ShopContext } from 'frontend-shopify'
import { AppContext } from '../../../context'
import { Icon } from '../../../components'

type SideNavCartButtonProps = {
	label?: string
	totalQuantity: number
	handleClick: () => void
}

const SideNavCartButton: React.FC<SideNavCartButtonProps> = (props) => {
	const { label = 'Cart', totalQuantity, handleClick } = props

	return (
		<ListItem
			disablePadding
			disableGutters
			secondaryAction={
				<Badge
					badgeContent={totalQuantity}
					color="primary"
					sx={sx.badge}
				></Badge>
			}
		>
			<ListItemButton onClick={handleClick}>
				<ListItemText
					primary={
						<Typography variant="button" color="text.primary">
							{label}
						</Typography>
					}
				/>
			</ListItemButton>
		</ListItem>
	)
}

type TopNavCartButtonProps = {
	icon?: string
	totalQuantity: number
	handleClick: () => void
}

const TopNavCartButton: React.FC<TopNavCartButtonProps> = (props) => {
	const { icon = 'ShoppingCart', totalQuantity, handleClick } = props

	return (
		<IconButton onClick={handleClick} sx={sx.root}>
			<Badge color="primary" badgeContent={totalQuantity}>
				<Icon name={icon} size={24} color="text.primary" />
			</Badge>
		</IconButton>
	)
}

type CartButtonProps = {
	icon?: string
	variant?: 'topNav' | 'sideNav'
	editing?: boolean
	label?: string
}

const CartButton: React.FC<CartButtonProps> = (props) => {
	const { variant = 'topNav', label = 'Cart', icon = 'ShoppingCart' } = props

	const { cart, toggleCart } = useContext(ShopContext) as any
	const { setMenuOpen } = useContext(AppContext)

	const handleCartClick = () => {
		setMenuOpen(false)
		toggleCart()
	}

	return variant == 'topNav' ? (
		<TopNavCartButton
			icon={icon}
			handleClick={handleCartClick}
			totalQuantity={cart?.totalQuantity}
		/>
	) : (
		<SideNavCartButton
			label={label}
			handleClick={handleCartClick}
			totalQuantity={cart?.totalQuantity}
		/>
	)
}

export default CartButton

const sx = {
	root: {
		pr: 1.5, // Space for the badge count
	},
	button: {
		width: '100%',
		color: 'text.primary',
		justifyContent: 'flex-start',
	},
	badge: {
		mr: 1,
	},
}

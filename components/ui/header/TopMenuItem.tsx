import React from 'react'
import {
	CircularProgress,
	Box,
	Divider,
	Button,
	Menu,
	MenuItem,
	Typography,
} from '@mui/material'
import { useMenu } from '../../../hooks'
import { MenuLinkType } from '../../..'
import { Icon } from '../..'
import { useCollections } from 'frontend-shopify'
import { useRouter } from 'next/router'

type TopMenuItemProps = {
	menuItem: MenuLinkType
	handleClick: (path: string) => void
}

const TopMenuItem: React.FC<TopMenuItemProps> = (props) => {
	const router = useRouter()

	const { menuItem, handleClick } = props

	const { children } = menuItem

	const { loading, products, findCollections } = useCollections()

	const { open, openMenu, closeMenu, anchorEl, toggleMenu } = useMenu()

	const handleListClick = () => {
		router.push(`/collections/${menuItem?.shopify_handle}`)
		closeMenu()
	}

	const handleProductClick = (product) => {
		router.push(`/products/${menuItem?.shopify_handle}`)
		closeMenu()
	}

	const handleMenuClick = (ev, menuItem) => {
		if (menuItem?.children?.length > 0) {
			toggleMenu(ev)
			return
		}
		if (menuItem?.link_type == 'shopify_collection') {
			openMenu(ev)
			findCollections(menuItem?.shopify_handle)
			return
		} else if (menuItem?.link_type == 'url') {
			closeMenu()
			window.open(menuItem.url, '_blank')
		} else {
			closeMenu()
			handleClick(menuItem.path)
		}
	}

	const handleMouseLeave = () => {
		closeMenu()
	}

	return (
		<>
			<Button
				sx={sx.menuButton}
				onClick={(ev) => handleMenuClick(ev, menuItem)}
				startIcon={menuItem?.icon && <Icon name={menuItem.icon} />}
				endIcon={
					(children?.length > 0 ||
						menuItem?.link_type == 'shopify_collection') && (
						<Box
							sx={{
								...sx.icon,
								...(open && sx.rotateIcon),
							}}
						>
							<Icon name="ChevronDown" />
						</Box>
					)
				}
			>
				{menuItem.label}
			</Button>
			<Menu
				open={open}
				anchorEl={anchorEl}
				onClose={closeMenu}
				MenuListProps={{
					onMouseLeave: handleMouseLeave,
				}}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				{children?.map((child, index) => (
					<MenuItem
						key={index}
						//@ts-ignore
						onClick={(ev) => handleMenuClick(ev, child)}
					>
						<Typography variant="button" color="text.primary">
							{child.name}
						</Typography>
					</MenuItem>
				))}
				{loading && (
					<Box sx={sx.loading}>
						<CircularProgress size={30} />
					</Box>
				)}
				{products?.slice(0, 5)?.map((product, i) => (
					<MenuItem key={i} onClick={() => handleProductClick(product)}>
						<Typography variant="button" color="text.primary">
							{product.title}
						</Typography>
					</MenuItem>
				))}
				{products?.length > 5 && (
					<>
						<Divider />
						<MenuItem onClick={handleListClick}>
							<Typography variant="button" color="text.primary">
								See All
							</Typography>
						</MenuItem>
					</>
				)}
			</Menu>
		</>
	)
}

export default TopMenuItem

const sx = {
	menuButton: {
		boxShadow: 0,
		cursor: 'pointer',
		justifyContent: 'flex-start',
		color: 'text.primary',
		borderRight: 'none !important',
	},
	iconButton: {
		'&:hover': {
			bgcolor: 'transparent',
		},
	},
	icon: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: 'text.primary',
		transition: 'transform 0.2s ease-in-out',
	},
	rotateIcon: {
		transform: 'rotate(-180deg)',
	},
	loading: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		p: 2,
	},
}

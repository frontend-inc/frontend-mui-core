import React, { useState } from 'react'
import {
	Collapse,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemButton,
	ListItemText,
	Typography,
	CircularProgress,
	Box,
} from '@mui/material'
import { MenuLinkType } from '../../..'
import { Icon } from '../..'
import { useCollections } from 'frontend-shopify'
import { useRouter } from 'next/router'

type SublinkMenuItemProps = {
	label: string
	handleClick: () => void
}

const SublinkMenuItem: React.FC<SublinkMenuItemProps> = (props) => {
	const { label, handleClick } = props
	return (
		<ListItem sx={sx.subLink} disablePadding>
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

type SideNavMenuItemProps = {
	menuItem: MenuLinkType
	handleClick: (path: string) => void
}

const SideNavMenuItem: React.FC<SideNavMenuItemProps> = (props) => {
	const router = useRouter()

	const { menuItem, handleClick } = props

	const [open, setOpen] = useState(false)

	const { children } = menuItem
	const { loading, products, findCollections } = useCollections()

	const handleListClick = () => {
		router.push(`/collections/${menuItem?.shopify_handle}`)
		setOpen(false)
	}

	const handleProductClick = (product) => {
		router.push(`/products/${menuItem?.shopify_handle}`)
		setOpen(false)
	}

	const handleMenuClick = (menuItem) => {
		if (menuItem?.children?.length > 0) {
			setOpen(!open)
			return
		}
		if (menuItem?.link_type == 'shopify_collection') {
			setOpen(false)
			findCollections(menuItem?.shopify_handle)
			return
		} else if (menuItem?.link_type == 'url') {
			window.open(menuItem.url, '_blank')
		} else {
			handleClick(menuItem.path)
		}
	}

	return (
		<>
			<ListItem
				disablePadding
				disableGutters
				secondaryAction={
					(children?.length > 0 ||
						menuItem?.link_type == 'shopify_collection') && (
						<IconButton
							sx={{
								...sx.icon,
								...(open && sx.rotateIcon),
							}}
							onClick={() => handleMenuClick(menuItem)}
						>
							<Icon name="ChevronDown" />
						</IconButton>
					)
				}
			>
				<ListItemButton onClick={() => handleMenuClick(menuItem)}>
					{menuItem?.icon && (
						<ListItemIcon>
							<Icon name={menuItem.icon} size={24} />
						</ListItemIcon>
					)}
					<ListItemText
						primary={
							<Typography variant="body1" color="text.primary">
								{menuItem.label}
							</Typography>
						}
					/>
				</ListItemButton>
			</ListItem>
			<Collapse in={open}>
				<List>
					{children?.map((child, index) => (
						<SublinkMenuItem
							key={index}
							label={child.name}
							handleClick={() => handleMenuClick(child)}
						/>
					))}
					{loading && (
						<Box sx={sx.loading}>
							<CircularProgress size={30} />
						</Box>
					)}
					{products?.slice(0, 5)?.map((product, i) => (
						<SublinkMenuItem
							label={product.title}
							handleClick={() => handleProductClick(product)}
						/>
					))}
					{products?.length > 5 && (
						<SublinkMenuItem label="See all" handleClick={handleListClick} />
					)}
				</List>
			</Collapse>
		</>
	)
}

export default SideNavMenuItem

const sx = {
	icon: {
		transition: 'transform 0.2s ease-in-out',
	},
	rotateIcon: {
		transform: 'rotate(-180deg)',
	},
	subLink: {
		pl: 1,
	},
	loading: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		p: 2,
	},
}

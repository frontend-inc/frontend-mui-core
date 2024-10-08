import React, { useContext } from 'react'
import { IconButton } from '@mui/material'
import {
	ListItem,
	ListItemText,
	ListItemButton,
	Typography,
} from '@mui/material'
import { ShopifyContext } from 'frontend-shopify'
import { AppContext } from '../../../context'
import { Icon } from '../..'

type TopSearchButtonProps = {
	handleClick: () => void
}

const TopSearchButton: React.FC<TopSearchButtonProps> = (props) => {
	const { handleClick } = props

	return (
		<IconButton sx={sx.root} onClick={handleClick}>
			<Icon name="Search" size={24} />
		</IconButton>
	)
}

type SideNavSearchButtonProps = {
	handleClick: () => void
}

const SideNavSearchButton: React.FC<SideNavSearchButtonProps> = (props) => {
	const { handleClick } = props

	return (
		<ListItem disablePadding disableGutters>
			<ListItemButton onClick={handleClick}>
				<ListItemText
					primary={
						<Typography variant="subtitle2" color="text.primary">
							Search
						</Typography>
					}
				/>
			</ListItemButton>
		</ListItem>
	)
}

type ShopifySearchButtonProps = {
	variant?: 'topNav' | 'sideNav'
}

const ShopifySearchButton: React.FC<ShopifySearchButtonProps> = (props) => {
	const { variant = 'topNav' } = props
	const { toggleSearch } = useContext(ShopifyContext) as any
	const { setMenuOpen } = useContext(AppContext)

	const handleToggleSearch = () => {
		setMenuOpen(false)
		toggleSearch()
	}

	return variant == 'topNav' ? (
		<TopSearchButton handleClick={handleToggleSearch} />
	) : (
		<SideNavSearchButton handleClick={handleToggleSearch} />
	)
}

export default ShopifySearchButton

const sx = {
	root: {
		px: 1,
	},
	button: {
		color: 'text.primary',
		justifyContent: 'flex-start',
	},
}

import React, { useState } from 'react'
import {
	ButtonGroup,
	Button,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemButton,
	Typography,
	Radio,
} from '@mui/material'
import { MenuList } from '../..'
import { SORT_DIRECTIONS } from '../../../constants/index'
import { SortOptionType } from '../../../types'

type SortListProps = {
	sortOptions: SortOptionType[]
	sortBy: string
	sortDirection: 'asc' | 'desc'
	handleSortBy: (field: SortOptionType) => void
	handleSortDirection: (sortDirection: 'asc' | 'desc') => void
}

const SortList: React.FC<SortListProps> = (props) => {
	const {
		sortOptions,
		sortBy,
		sortDirection,
		handleSortBy,
		handleSortDirection,
	} = props

	return (
		<>
			<MenuList disablePadding label="Sort by">
				{sortOptions?.map((sortOption: any) => (
					<ListItem disablePadding disableGutters sx={sx.listItem}>
						<ListItemButton
							sx={sx.listItemButton}
							disableRipple
							onClick={() => handleSortBy(sortOption)}
						>
							<ListItemIcon sx={sx.listItemIcon}>
								<Radio
									checked={sortBy == sortOption?.name}
									onChange={() => handleSortBy(sortOption)}
								/>
							</ListItemIcon>
							<ListItemText
								primary={
									<Typography variant="button">{sortOption?.label}</Typography>
								}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</MenuList>
			<MenuList disablePadding label="Direction">
				{SORT_DIRECTIONS.map((direction, i) => (
					<ListItem disablePadding key={i} sx={sx.listItem}>
						<ListItemButton
							sx={sx.listItemButton}
							disableRipple
							onClick={() => handleSortDirection(direction?.value)}
						>
							<ListItemIcon sx={sx.listItemIcon}>
								<Radio
									checked={sortDirection == direction?.value}
									onChange={() => handleSortDirection(direction?.value)}
								/>
							</ListItemIcon>
							<ListItemText
								primary={
									<Typography color="text.primary" variant="button">
										{direction?.label}
									</Typography>
								}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</MenuList>
		</>
	)
}

export default SortList

const sx = {
	listItem: {
		py: 0,
	},
	listItemButton: {
		p: 0,
	},
	listItemIcon: {
		minWidth: '40px',
	},
	sortDirectionButton: {
		width: '32px',
		borderLeft: 'none',
		'&:hover': {
			borderLeft: 'none',
		},
	},
}

import React from 'react'
import CollectionFilterList from './FilterList'
import { Button, Hidden } from '@mui/material'
import { Icon, Drawer } from '../..'
import { useMenu } from '../../../hooks'

type CollectionFilterListProps = {
	filters: any
	filterOptions: any
	handleFilter: any
}

const CollectionSearchFilters: React.FC<CollectionFilterListProps> = (
	props
) => {
	const { filters = [], filterOptions = [], handleFilter } = props
	const { open, toggleMenu, closeMenu } = useMenu()

	return (
		<>
			<Hidden smDown>
				<CollectionFilterList
					filters={filters}
					filterOptions={filterOptions}
					handleFilter={handleFilter}
				/>
			</Hidden>
			<Hidden smUp>
				<Button
					sx={sx.button}
					onClick={toggleMenu}
					color="secondary"
					variant="contained"
					startIcon={<Icon name="SlidersHorizontal" size={20} />}
				>
					Filters
				</Button>
				<Drawer open={open} handleClose={closeMenu} anchor="right">
					<CollectionFilterList
						filters={filters}
						filterOptions={filterOptions}
						handleFilter={handleFilter}
					/>
				</Drawer>
			</Hidden>
		</>
	)
}

export default CollectionSearchFilters

const sx = {
	button: {
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
}

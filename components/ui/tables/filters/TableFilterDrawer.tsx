import React from 'react'
import { Drawer } from '../../..'
import TableFilterForm from './TableFilterForm'

type TableFilterDrawerProps = {
	open: boolean
	query: any
	handleClose: () => void
	fields: any[]
	handleSearch: (keywords: any) => void
	handleChange: (e: any) => void
	handleClearFilters: () => void
}

const TableFilterDrawer: React.FC<TableFilterDrawerProps> = (props) => {
	const {
		open,
		query,
		handleClose,
		fields,
		handleSearch,
		handleChange,
		handleClearFilters,
	} = props

	return (
		<Drawer open={open} handleClose={handleClose} title="search">
			<TableFilterForm
				query={query}
				fields={fields}
				handleSearch={handleSearch}
				handleChange={handleChange}
				handleClearFilters={handleClearFilters}
			/>
		</Drawer>
	)
}

export default TableFilterDrawer

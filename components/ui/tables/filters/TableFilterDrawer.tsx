'use client'

import React from 'react'
import { Drawer } from '../../..'
import TableFilterForm from './TableFilterForm'

type TableFilterDrawerProps = {
	open: boolean
	loading: boolean
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
		loading,
		query,
		handleClose,
		fields,
		handleSearch,
		handleChange,
		handleClearFilters,
	} = props

	return (
		<Drawer mode="editor" open={open} handleClose={handleClose} title="search">
			<TableFilterForm
				loading={loading}
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

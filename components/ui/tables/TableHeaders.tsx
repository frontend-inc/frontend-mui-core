'use client'

import React from 'react'
import { Checkbox } from '../../../tailwind'
import { CellHeader, TableCell } from '../../../components'
import { TableRow } from '../../../shadcn/ui/table'

type TableHeaderProps = {
	sortBy?: string
	sortDirection?: string
	fields: Array<any>
	checked?: boolean
	enableSelect?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	enableShow?: boolean
	handleSort: (e: any) => void
	handleSelectAll: (e: any) => void
}

const TableHeaders: React.FC<TableHeaderProps> = (props) => {
	const {
		fields,
		checked,
		sortBy = 'id',
		sortDirection = 'asc',
		enableSelect = false,
		enableEdit = false,
		enableDelete = false,
		enableShow = false,
		handleSort,
		handleSelectAll,
	} = props

	// Wrapping in <TableHead /> causes nextjs react hydration errors
	// so we place the headers in the <TableBody /> component
	return (
		<TableRow>
			{enableSelect && (
				<TableCell variant="head" sticky header small>
					<div className="mx-2">
						{/* @ts-ignore */}
						<Checkbox value={checked} handleChange={handleSelectAll} />
					</div>
				</TableCell>
			)}
			{(enableEdit || enableDelete || enableShow) && (
				<TableCell variant="head" header small>
					<div></div>
				</TableCell>
			)}
			{fields?.map((field, index) => (
				<TableCell header key={index}>
					<CellHeader
						field={field}
						sortBy={sortBy}
						sortDirection={sortDirection}
						handleSort={handleSort}
					/>
				</TableCell>
			))}
		</TableRow>
	)
}

export default TableHeaders

import React from 'react'
import {
	Box,
	TableBody,
	Typography,
	TableRow as MuiTableRow,
	TableCell as MuiTableCell,
} from '@mui/material'
import {
	TableContainer,
	TableHeaders,
	TableRow,
	Pagination,
	Placeholder,
} from '../../../components'

type TableProps = {
	title?: string
	loading: boolean
	fields: Array<any>
	rows: Array<any>
	toolbar?: React.ReactNode
	disableBorderRadius?: boolean
	enableSelect?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	enableShow?: boolean
	handleClick?: (value: any, row: any, field: any) => void
	handleShow?: (resource: any) => void
	handleEdit?: (resource: any) => void
	handleDelete?: (resource: any) => void
	page?: number
	perPage?: number
	numPages?: number
	totalCount?: number
	query: any
	styles?: any
	selected?: any
	selectedIds?: any
	handleSelect?: (row: any) => void
	handleSelectAll?: () => void
	handleSort: (field: any) => void
	handlePaginate: (e: any, page: number) => void
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
}

const TableList: React.FC<TableProps> = (props) => {
	const {
		title,
		toolbar,
		loading,
		fields,
		rows,
		disableBorderRadius,
		enableSelect = false,
		enableEdit = false,
		enableDelete = false,
		enableShow = false,
		handleClick,
		handleEdit,
		handleDelete,
		handleShow,
		query,
		selected,
		selectedIds,
		handleSelect,
		handleSelectAll,
		handleSort,
		handlePaginate,
		page,
		perPage,
		numPages,
		totalCount,
		styles = {},
		emptyIcon = 'Search',
		emptyTitle = 'No results found',
		emptyDescription = 'Try adjusting your search or filters',
	} = props

	return (
		<Box
			sx={{
				...sx.root,
				...(disableBorderRadius && sx.disableBorderRadius),
			}}
		>
			{(title || toolbar) && (
				<Box p={1} sx={sx.toolbar}>
					{title && (
						<Typography variant="subtitle1" color="text.primary">
							{title}
						</Typography>
					)}
					{toolbar && toolbar}
				</Box>
			)}
			<TableContainer styles={styles}>
				<TableBody>
					<TableHeaders
						enableEdit={enableEdit}
						enableSelect={enableSelect}
						enableDelete={enableDelete}
						enableShow={enableShow}
						fields={fields}
						sortBy={query?.sort_by}
						sortDirection={query?.sort_direction}
						checked={selected?.length > 0 && selected?.length === rows?.length}
						handleSort={handleSort}
						handleSelectAll={handleSelectAll}
					/>
					{rows?.map((row) => (
						<TableRow
							key={row?.id}
							row={row}
							fields={fields}
							selectedIds={selectedIds}
							enableSelect={enableSelect}
							enableEdit={enableEdit}
							enableDelete={enableDelete}
							enableShow={enableShow}
							handleClick={handleClick}
							handleEdit={handleEdit}
							handleDelete={handleDelete}
							handleShow={handleShow}
							handleSelect={handleSelect}
						/>
					))}
					{!loading && rows?.length == 0 && (
						<MuiTableRow>
							<MuiTableCell colSpan={fields?.length + 1}>
								<Placeholder
									icon={emptyIcon}
									title={emptyTitle}
									description={emptyDescription}
								/>
							</MuiTableCell>
						</MuiTableRow>
					)}
				</TableBody>
			</TableContainer>
			<Pagination
				page={page}
				perPage={perPage}
				numPages={numPages}
				totalCount={totalCount}
				loading={loading}
				handlePaginate={handlePaginate}
			/>
		</Box>
	)
}

export default TableList

const sx = {
	root: {
		overflow: 'hidden',
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
	},
	disableBorderRadius: {
		borderRadius: 0,
	},
	toolbar: {
		minHeight: 40,
		width: '100%',
	},
}

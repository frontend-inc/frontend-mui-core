import React, { useState } from 'react'
import { TableList, TableToolbar } from '../../../components'
import { useSelected } from '../../../hooks'

type TableProps = {
	loading: boolean
	headers: Array<any>
	rows: Array<any>
	enableSearch?: boolean
	enableFilters?: boolean
	enableSelect?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	handleClick: (value: any, row: any, field: any) => void
	handleEdit: (row: any) => void
	handleEditSelected: (items: any[]) => void
	handleDelete: (items: any[]) => void
	handlePublish: (items: any[]) => void
	handleUnpublish: (items: any[]) => void
	secondaryActions?: React.ReactNode
	page?: number
	perPage?: number
	numPages?: number
	totalCount?: number
	query: any
	handleQueryChange: (e: any) => void
	handleClearQuery: () => void
	handlePaginate: (page: number) => void
	handleSearch: (keywords: any) => void
	handleKeywordSearch: (keywords: string) => void
	handleSort: (field: any) => void
	disableBorderRadius?: boolean
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
}

const Table: React.FC<TableProps> = (props) => {

	const {
		loading,
		headers,
		rows,
		enableSelect = false,
		enableEdit = false,
		enableDelete = false,
		handleClick,
		handleEdit,
		handleEditSelected,
		handleDelete,

		handlePublish,
		handleUnpublish,
		secondaryActions,

		query,
		handleClearQuery,
		handleQueryChange,
		handleSearch,
		handleKeywordSearch,
		handleSort,

		page = 1,
		perPage = 10,
		numPages,
		totalCount,
		handlePaginate,
		disableBorderRadius = false,
		emptyIcon,
		emptyTitle,
		emptyDescription,
	} = props

	const handleKeywordChange = (e: any) => {
		handleQueryChange({
			target: {
				name: 'keywords',
				value: e.target.value,
			},
		})
	}

	const { selected, selectedIds, setSelected, setSelectedIds, handleSelect } =
		useSelected()

	const handleSelectAll = () => {
		if (selected?.length === rows?.length) {
			setSelected([])
			setSelectedIds([])
		} else {
			setSelected(rows)
			setSelectedIds(rows.map((r) => r.id))
		}
	}

	return (
    <TableList
      loading={loading}
      disableBorderRadius={disableBorderRadius}
      query={query}
      toolbar={
        <TableToolbar
          loading={loading}
          query={query}
          selected={selected}
          handleKeywordSearch={handleKeywordSearch}
          handleKeywordChange={handleKeywordChange}
          handleClearQuery={handleClearQuery}
          enableEdit={enableEdit}
          enableDelete={enableDelete}
          handleDelete={handleDelete}
          handleEdit={handleEditSelected}
          handlePublish={handlePublish}
          handleUnpublish={handleUnpublish}
          secondaryActions={secondaryActions}
          fields={headers}
          handleFilter={handleSearch}
          handleSearch={handleSearch}
          handleChange={handleQueryChange}
          handleClearFilters={handleClearQuery}
        />
      }
      headers={headers}
      resources={rows}
      enableEdit={enableEdit}
      enableSelect={enableSelect}
      selected={selected}
      selectedIds={selectedIds}
      handleClick={handleClick}
      handleEdit={handleEdit}
      handleSelect={handleSelect}
      handleSort={handleSort}
      handleSelectAll={handleSelectAll}
      page={page}
      perPage={perPage}
      numPages={numPages}
      totalCount={totalCount}
      handlePaginate={handlePaginate}
      emptyIcon={emptyIcon}
      emptyTitle={emptyTitle}
      emptyDescription={emptyDescription}
    />				
	)
}

export default Table

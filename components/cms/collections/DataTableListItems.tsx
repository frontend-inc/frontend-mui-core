import React from 'react'
import { useResourceContext } from 'frontend-js'
import { useApp } from '../../../hooks'
import { TableHeaderType } from '../../../types'
import { useRouter } from 'next/router'
import { TableList } from '../..'
import { DataListItemsProps } from '../data/DataListItems'
import { cn } from '../../../shadcn/lib/utils'

export type DataTableListProps = DataListItemsProps & {
	headers: TableHeaderType[]
	enableShow?: boolean
	href?: string
}

const DataTableList: React.FC<DataTableListProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useApp()

	const {
		loading,
		resources,
		findMany,
		paginate,
		query,
		page,
		perPage,
		numPages,
		totalCount,
    selectAll,
	} = useResourceContext()

	const { headers, href, enableShow = false } = props || {}

	const handleCellClick = (value, row, field) => {
		// Todo: manage cell buttons
	}

	const handleClick = (resource) => {
		if (clientUrl && href && resource?.handle) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
			router.push(`${clientUrl}${href}/${resource?.handle}`)
		}
	}

	const handleSort = (field) => {
		const { name } = field || {}
		const { sort_by } = query || {}
		let sort_direction = query?.sort_direction || 'asc'
		if (sort_by == name) {
			sort_direction = sort_direction == 'asc' ? 'desc' : 'asc'
		}
		findMany({
			...query,
			sort_direction,
			sort_by: name,
		})
	}

	const handlePaginate = async (value) => {
		await paginate(value)
	}

	return (
		<div className="flex flex-col space-y-2">
			<div className={cn(loading && 'opacity-50')}>
				<TableList          
					handleClick={handleCellClick}
					enableShow={enableShow}
					handleShow={handleClick}
					loading={resources && loading}
					headers={headers}
					resources={resources}
					query={query}
					handleSort={handleSort}
					page={page}
					perPage={perPage}
					numPages={numPages}
					totalCount={totalCount}
					handlePaginate={handlePaginate}
          handleSelectAll={selectAll}
				/>
			</div>
		</div>
	)
}

export default DataTableList

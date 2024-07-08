import React, { useContext, useState, useEffect } from 'react'
import { useFilters } from '../../../hooks'
import { useDocuments } from 'frontend-js'
import { Button, Grid, Box, Stack } from '@mui/material'
import { AppContext } from '../../../context'
import { TableHeaderType } from '../../../types'
import { useRouter } from 'next/router'
import { flattenDocuments } from '../../../helpers'
import { TableList } from '../..'
import { CollectionListProps } from './CollectionList'
import { useQuery } from 'frontend-js'
import { useForms } from '../../../hooks'

export type CollectionTableProps = CollectionListProps & {
	headers: TableHeaderType[]
}

const CollectionTable: React.FC<CollectionTableProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

  const { 
    loading,
    resources,
    findMany, 
    paginate,
    query,
    page,
    perPage,
    numPages,
    numResults,
    totalCount,    
  } = useQuery()

	const {
		headers,
		href,		
		enableEdit = false,
		enableDelete = false,
	} = props

	const handleClick = (item) => {
		if (clientUrl && href && item?.handle) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
			router.push(`${clientUrl}${href}/${item?.handle}`)
		}
	}

  const {
    handleEdit,
    handleDeleteClick
  } = useForms()

  const handleSort = (field) => {       
    const { name } = field || {}
    const { sort_by } = query || {}
    let sort_direction = query?.sort_direction || 'asc' 
    if(sort_by == name) {
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

	const [rows, setRows] = useState([])

	useEffect(() => {
		if (resources?.length >= 0) {
			let flatten = flattenDocuments(resources)
			setRows(flatten)
		}
	}, [resources])

	return (
		<Stack spacing={1} sx={sx.root}>
      <Box sx={{ ...(loading && sx.loading) }}>
        <TableList
          enableEdit={enableEdit}
          handleEdit={handleEdit}
          enableDelete={enableDelete}
          handleDelete={handleDeleteClick}
          loading={resources && loading}
          fields={headers}
          rows={rows}
          handleClick={handleClick}
          query={query}
          handleSort={handleSort}
          page={page}
          perPage={perPage}
          numPages={numPages}
          numResults={numResults}
          totalCount={totalCount}
          handlePaginate={handlePaginate}
        />
      </Box>
		</Stack>
	)
}

export default CollectionTable

const sx = {
	root: {
		width: '100%',
	},
	content: {
		width: '100%',
	},
	list: {
		display: 'flex',
		flexDirection: 'column',
		gap: '16px',
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: {
			md: '1fr 1fr 1fr',
			xs: '1fr',
		},
		gap: '16px',
	},
	item: {
		p: 2,
	},
	button: {
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
	filtersContainer: {
		mr: {
			sm: 2,
			xs: 0,
		},
		mb: {
			sm: 0,
			xs: 2,
		},
	},
	toolbar: {
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	loading: {
		opacity: 0.7,
	},
	circularProgress: {
		color: 'primary.main',
	},
	fullWidth: {
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
}
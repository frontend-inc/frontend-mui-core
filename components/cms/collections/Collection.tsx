import React, { useContext, useState, useEffect } from 'react'
import { useFilters } from '../../../hooks'
import { useResource } from 'frontend-js'
import { Button, Grid, Box, Stack } from '@mui/material'
import {
  Form,
  Drawer,
  AlertModal,
  Icon,
	CollectionFilterButton,
	SortButton,
	SearchInput,
	LoadMore,
  IconLoading
} from '../../../components'
import { AppContext } from '../../../context'
import { FieldType, FilterOptionType } from '../../../types'
import { useRouter } from 'next/router'
import { CollectionList, Placeholder } from '../..'
import CollectionSearchFilters from './filters/CollectionSearchFilters'
import { SearchFilterOptionType } from '../../../types'
import { SortOptionType } from '../../../types'
import { SYSTEM_FIELDS } from '../../../constants'
import { flattenDocument } from '../../../helpers'

export type CollectionProps = {
  enableForeign?: boolean
  resource?: any
  field?: any
	url: string
  foreignUrl?: string
	variant: 'list' | 'grid'
	style: 'avatar' | 'card' | 'cover' | 'chip'
	editing?: boolean
	enableInfiniteLoad?: boolean
	enableLoadMore?: boolean
	navigateUrl: any
	perPage?: number
	query?: any
  fields: FieldType[]
	filterAnchor?: 'left' | 'top'
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
	enableSearch?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	secondaryActions?: React.ReactNode
	buttonText?: string
  enableForeign?: boolean
	enableBorder?: boolean
	enableGradient?: boolean
  enableEdit?: boolean
  enableCreate?: boolean
  enableDelete?: boolean
}

const Collection: React.FC<CollectionProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

	const {
		variant = 'grid',
		style = 'card',
		url,
    fields,
		filterAnchor = 'left',
		filterOptions = [],
		sortOptions = [],
		query: defaultQuery = {},
		perPage = 20,
		enableSearch = false,
		enableFilters = false,
		enableSorting = false,
		enableInfiniteLoad = false,
		enableLoadMore = true,
		navigateUrl,
		buttonText,
		enableBorder = false,
		enableGradient = false,
    enableEdit=false,
    enableCreate=false,
    enableDelete=false
	} = props

  const [openModal, setOpenModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

	const { 
    loading, 
    delayedLoading,
    errors,
    resource,
    resources, 
    setResource,
    update,
    create,
    destroy,
    query, 
    findMany, 
    reloadMany,    
    removeAttachment,
    page, 
    numPages, 
    loadMore 
  } = useResource({
      name: 'document',
			url,
		})

	const [keywords, setKeywords] = useState('')

	const handleKeywordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setKeywords(ev.target.value)
	}  

	const handleSearch = (keywords: string) => {
		findMany({
			...query,
      ...defaultQuery,
			keywords: keywords,
			page: 1,
			per_page: perPage,
		})
	}

	const handleSortBy = (sortBy: string) => {
		findMany({
			...query,
			sort_by: sortBy,
		})
	}

	const handleSortDirection = (sortDirection: 'asc' | 'desc') => {
		findMany({
			...query,
			sort_direction: sortDirection,
		})
	}

	const {
		activeFilters,
		setActiveFilters,
		handleAddFilter,
		buildQueryFilters,
	} = useFilters({
		query,
	})

	// Filter methods
	const handleClearFilters = () => {
		setActiveFilters([])
		findMany({      
			filters: {
        ...defaultQuery?.filters,
      },
			sort_by: 'id',
			sort_direction: 'desc',
			keywords: '',
			page: 1,
			per_page: perPage,
		})
	}

	const handleFilter = (filter: FilterOptionType) => {
		handleAddFilter(filter)
	}

	const handleClick = (item) => {
		if (clientUrl && navigateUrl && item?.handle) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
			router.push(`${clientUrl}${navigateUrl}/${item?.handle}`)
		}
	}

	const handleDataChange = (ev) => {
		const { name } = ev.target
		const value =
			ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
		if (SYSTEM_FIELDS.includes(name)) {
			setResource((prev) => ({
				...prev,
				[name]: value,
			}))
		} else {
			setResource((prev) => ({
				...prev,
				data: {
					...prev.data,
					[name]: value,
				},
			}))
		}
	}

  const handleAdd = () => {
    setResource({})
    setOpenModal(true)
  }

  const handleEdit = (item) => {
    setResource(item)
    setOpenModal(true)
  }

  const handleSubmit = async () => {
		try {
			let resp
			if (resource?.id) {
				resp = await update(resource)
			} else {
				resp = await create(resource)
			}
			if(resp?.id) {
        setResource({})
        setOpenModal(false)
        reloadMany()
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

  const handleDeleteClick = (item) => {
    setResource(item)
    setOpenDeleteModal(true)
  }

  const handleDelete = async () => {
    await destroy(resource?.id)
    setOpenDeleteModal(false)
    setOpenModal(false)
    setResource({})
    reloadMany()
  }

  const handleRemove = async (name) => {
		await removeAttachment(resource?.id, name)
	}

	useEffect(() => {
		if (url && perPage) {
			findMany({
				...defaultQuery,
				per_page: perPage,
			})
		}
	}, [url, perPage])

	useEffect(() => {
		if (activeFilters) {
			findMany({
				...query,
        filters: buildQueryFilters(activeFilters),
        ...defaultQuery,
			})
		}
	}, [activeFilters?.length, defaultQuery])

	return (
		<Stack spacing={1} sx={sx.root}>
			<Stack direction="column" spacing={1}>
				{enableSearch && (
					<SearchInput
						value={keywords}
						handleChange={handleKeywordChange}
						handleSearch={handleSearch}
					/>
				)}
				<Stack
					direction={{ xs: 'column', sm: 'row' }}
					sx={sx.sortFilterActions}
					spacing={1}
				>
					{enableFilters && filterAnchor == 'top' && (
						<CollectionFilterButton
							filters={activeFilters}
							handleFilter={handleFilter}
							handleClear={handleClearFilters}
							filterOptions={filterOptions}
						/>
					)}
					{enableSorting && (
						<SortButton
							sortBy={query?.sort_by}
							sortDirection={query?.sort_direction}
							sortOptions={sortOptions}
							handleSortBy={handleSortBy}
							handleSortDirection={handleSortDirection}
						/>
					)}
          { enableCreate && (
            <Box>
              <Button 
                sx={ sx.button }
                color="secondary"
                variant="contained"
                onClick={ handleAdd }
                startIcon={
                  <Icon name="Plus" size={20} />
                }
              >
                Add 
              </Button> 
            </Box>
          )}
				</Stack>
			</Stack>
			<Grid container spacing={0}>
				{enableFilters && filterAnchor == 'left' && (
					<Grid item xs={12} sm={4} lg={3}>
						<Box sx={sx.filtersContainer}>
							<CollectionSearchFilters
								filters={activeFilters}
								filterOptions={filterOptions}
								handleFilter={handleFilter}
							/>
						</Box>
					</Grid>
				)}
				<Grid
					item
					xs={12}
					sm={enableFilters && filterAnchor == 'left' ? 8 : 12}
					lg={enableFilters && filterAnchor == 'left' ? 9 : 12}
				>
					<Box sx={{ ...(delayedLoading && sx.loading) }}>
						<CollectionList
							variant={variant}
							style={style}
							resources={resources}
							handleClick={handleClick}
							buttonText={buttonText}
							enableBorder={enableBorder}
							enableGradient={enableGradient}
              enableEdit={ enableEdit }
              enableCreate={ enableCreate }
              enableDelete={ enableDelete }
              handleEdit={ handleEdit }
              handleDelete={ handleDeleteClick }              
						/>
					</Box>
					{!loading && resources.length == 0 && (
						<Placeholder
							icon="Search"
							title="No results found"
							description="Try adjusting your search or filters"
						/>
					)}
				</Grid>
			</Grid>
			{enableLoadMore && (
				<LoadMore
					page={page}
					numPages={numPages}
					loadMore={loadMore}
					enableInfiniteLoad={enableInfiniteLoad}
				/>
			)}
      <Drawer 
        open={ openModal }
        handleClose={() => setOpenModal(false) }
        title={ resource?.id ? 'Edit' : 'Add' }
        actions={
          <Button 
            fullWidth 
            variant="contained"
            color="primary"
            onClick={ handleSubmit }
            startIcon={ 
              <IconLoading loading={ loading } />
            }
            >
            { resource?.id ? 'Update' : 'Save' }
          </Button>      
        }
      >
        <Form  
          loading={ loading }
          errors={errors}
          fields={ fields }
          resource={ flattenDocument(resource) }
          handleChange={ handleDataChange }
          handleRemove={ handleRemove }          
        />
      </Drawer>
      <AlertModal 
        open={ openDeleteModal }
        handleClose={ () => setOpenDeleteModal(false) }
        title="Are you sure you want to delete this item?"
        description="This action cannot be reversed."
        handleConfirm={ handleDelete }
      />
		</Stack>
	)
}

export default Collection

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
      xs: '100%'
    }
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
	sortFilterActions: {
		justifyContent: 'flex-end',
	},
	loading: {
		opacity: 0.7,
	},
	circularProgress: {
		color: 'primary.main',
	},
}

import React from 'react'
import { Stack, List } from '@mui/material'
import { 
  LoadMore,
  Resource 
} from '../../../components'
import { SortOptionType } from '../../../types'

export type ResourceListProps = {
  resources: any[]
  page: number
  numPages: number
  enableBorder?: boolean
  enableEdit?: boolean
  enableDelete?: boolean
  handleClick?: (resource: any) => void
  handleEdit: (resource: any) => void
  handleDelete: (resource: any) => void
  handleDrop?: (sorted: any[]) => void
  handleLoadMore: () => void
  handleSort: (field: SortOptionType) => void
  component?: React.FC<any>
}

const ResourceList: React.FC<ResourceListProps> = (props) => {

  const { 
    resources, 
    page,
    numPages,
    enableBorder,
    enableEdit,
    enableDelete,
    handleClick,
    handleEdit,
    handleDelete,
    handleLoadMore,
    component: Component = Resource, 
  } = props || {}

  return(
    <Stack spacing={2} sx={sx.fullWidth}>
      <List>
        {resources?.map((resource, index) => (
          <Component
            key={index}
            enableBorder={enableBorder}
            resource={ resource }          
            handleClick={
              handleClick ? () => handleClick(resource) : undefined
            }
            handleEdit={
              enableEdit ? () => handleEdit(resource) : undefined
            }
            handleDelete={
              enableDelete ? () => handleDelete(resource) : undefined
            }
          />
        ))}
      </List>
      <LoadMore 
        page={page} 
        numPages={numPages} 
        loadMore={handleLoadMore} 
      />
    </Stack>  
  )
}

export default ResourceList

const sx = {
  fullWidth: {
    width: '100%'
  },
  list: {
		display: 'flex',
		flexDirection: 'column',
		gap: '8px',
	},
	listDense: {
		gap: '8px',
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: {
			md: '1fr 1fr 1fr',
			xs: '1fr',
		},
		gap: '16px',
	},

}
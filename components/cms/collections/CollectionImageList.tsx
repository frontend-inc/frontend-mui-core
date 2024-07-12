import React from 'react'
import { Grid, Stack } from '@mui/material'
import { LoadMore } from '../..'
import { useCollection } from 'frontend-js'
import {
  ImageCard,
	CollectionImageModal,
	Placeholder,
} from '../../../components'
import { useForms } from '../../../hooks'

export type CollectionListImageProps = {
	url: string
	enableGradient?: boolean
	enableOverlay?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	enableComments?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableUsers?: boolean
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
}

const CollectionImageList: React.FC<CollectionListImageProps> = (props) => {

	const {
		resource,
		setResource,
		loading,
		resources,
		page,
		numPages,
		loadMore,
		openShow,
		setOpenShow,
	} = useCollection()

	const {
		enableGradient = false,
		enableOverlay = false,
		enableEdit = false,
		enableDelete = false,
		enableFavorites = false,
		enableLikes = false,
		enableUsers = false,
		enableComments = false,
		emptyIcon,
		emptyTitle = 'No results found',
		emptyDescription = 'Try changing your search or filters.',
		...rest
	} = props

	const handleClick = (resource) => {
    setResource(resource)
    setOpenShow(true)		
	}

	const { handleEdit, handleDeleteClick } = useForms()

	return (
    <>
			<Stack direction="column" spacing={2}>
        <Grid container spacing={1}>          
        { resources?.map(resource => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ImageCard 
              key={ resource.id }
              resource={resource}
              enableEdit={enableEdit}
              enableDelete={enableDelete}
              enableOverlay={enableOverlay}
              enableGradient={enableGradient}
              enableUsers={enableUsers}
              enableFavorites={enableFavorites}
              enableComments={enableComments}
              handleClick={() => handleClick(resource)}
              handleDelete={() => handleDeleteClick(resource)}
            />
          </Grid>
        ))}	
        </Grid>		
				<LoadMore page={page} numPages={numPages} loadMore={loadMore} />
			</Stack>
			{!loading && resources?.length == 0 && (
				<Placeholder
					enableBorder
					icon={emptyIcon}
					title={emptyTitle}
					description={emptyDescription}
				/>
			)}
			<CollectionImageModal
				open={openShow}
				handleClose={() => setOpenShow(false)}
				enableOverlay={enableOverlay}
				enableFavorites={enableFavorites}
				enableLikes={enableLikes}
				enableComments={enableComments}
				enableUsers={enableUsers}
				enableEdit={enableEdit}
				handleEdit={() => handleEdit(resource)}
			/>
		</>
	)
}

export default CollectionImageList

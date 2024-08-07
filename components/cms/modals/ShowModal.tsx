import React from 'react'
import { Box } from '@mui/material'
import { Comments, Modal, ShowSnippet } from '../..'
import { useResourceContext } from 'frontend-js'
import { ButtonType, FormFieldType, DisplayFieldType } from '../../../types'

export type ShowModalProps = {
	handle?: string
	enableBorder?: boolean
	enableOverlay?: boolean
	buttons: ButtonType[]
	displayFields: DisplayFieldType[]
	fields?: FormFieldType[]
	fieldName?: string
	enableEdit?: boolean
	enableCreate?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableRatings?: boolean
	enableUsers?: boolean
	enablePayments?: boolean
	handleEdit?: () => void
	enableComments?: boolean
}

const ShowModal: React.FC<ShowModalProps> = (props) => {
	const { openShow, setOpenShow, resource, url } = useResourceContext()

	const {
		buttons = [],
		displayFields = [],
		enableComments,
		enableRatings,
		enableLikes,
		enableFavorites,
		enableSharing,
		enablePayments,
		enableEdit,
		handleEdit,
	} = props || {}

	if (!resource) return null
	return (
		<Modal
			disablePadding
			open={openShow}
			handleClose={() => setOpenShow(false)}
			maxWidth="sm"
		>
			<Box px={2} pb={2}>
				<ShowSnippet
					resource={resource}
					enableEdit={enableEdit}
					buttons={buttons}
					displayFields={displayFields}
					enableRatings={enableRatings}
					enablePayments={enablePayments}
					handleEdit={handleEdit}
					enableLikes={enableLikes}
					enableFavorites={enableFavorites}
					enableSharing={enableSharing}
				/>
				{enableComments && <Comments url={url} handle={resource?.handle} />}
			</Box>
		</Modal>
	)
}

export default ShowModal

'use client'

import React from 'react'
import { Modal, ProductListItem } from '../..'
import { useResourceContext } from 'frontend-js'
import { ButtonType, DisplayFieldType } from '../../../types'

export type ShowModalProps = {
	handle?: string
	enableBorder?: boolean
	buttons: ButtonType[]
	displayFields: DisplayFieldType[]
	fieldName?: string
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableRatings?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const ShowModal: React.FC<ShowModalProps> = (props) => {
	const { openShow, setOpenShow, resource, url } = useResourceContext()

	const {
		buttons = [],
		displayFields = [],
		enableRatings,
		enableLikes,
		enableFavorites,
		enableSharing,
		enableGradient,
		enableOverlay,
	} = props || {}

	if (!resource) return null
	return (
		<Modal open={openShow} handleClose={() => setOpenShow(false)} maxWidth="md">
			<ProductListItem
				disableBorder
				buttons={buttons}
				resource={resource}
				handleClick={() => setOpenShow(false)}
				displayFields={displayFields}
				enableGradient={enableGradient}
				enableOverlay={enableOverlay}
				enableFavorites={enableFavorites}
				enableLikes={enableLikes}
				enableRatings={enableRatings}
			/>
		</Modal>
	)
}

export default ShowModal

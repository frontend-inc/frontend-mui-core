'use client'

import React from 'react'
import { CommentList, Drawer, ShowItem } from '../..'
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
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableComments?: boolean
}

const ShowModal: React.FC<ShowModalProps> = (props) => {
	const { openShow, setOpenShow, resource, url } = useResourceContext()

	const {
		buttons = [],
		displayFields = [],
		enableComments,
		enableLikes,
		enableFavorites,
		enableSharing,
	} = props || {}

	if (!resource) return null
	return (
		<Drawer
			disablePadding
			open={openShow}
			handleClose={() => setOpenShow(false)}
			title={resource?.title}
		>
			<ShowItem
				style="snippet"
				resource={resource}
				buttons={buttons}
				displayFields={displayFields}
				enableLikes={enableLikes}
				enableFavorites={enableFavorites}
				enableSharing={enableSharing}
				slots={{
					image: {
						disableBorderRadius: true,
					},
				}}
			/>
			{enableComments && (
				<div className="px-2">
					<CommentList url={url} handle={resource?.handle} />
				</div>
			)}
		</Drawer>
	)
}

export default ShowModal

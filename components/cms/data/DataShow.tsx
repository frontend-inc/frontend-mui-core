'use client'

import React, { useEffect } from 'react'
import { ResourceDetails, ResourceModal } from '../../../components'
import { useResourceContext } from 'frontend-js'

export type DataShowProps = {
	open: boolean
	handleClose: () => void
	loading: boolean
	errors: any
	resource: any
	enableEdit?: boolean
	enableDelete?: boolean
	handleEdit?: () => void
	handleDelete?: () => void
	fields: any[]
}

const DataShow: React.FC<DataShowProps> = (props) => {
	const { findOne, openShow, setOpenShow, resource } = useResourceContext()

	const {
		loading,
		enableEdit,
		enableDelete,
		handleEdit,
		handleDelete,
		fields = [],
	} = props || {}

	useEffect(() => {
		if (openShow) {
			findOne(resource?.handle)
		}
	}, [openShow])

	return (
		<ResourceModal
			loading={loading}
			open={openShow}
			handleClose={() => setOpenShow(false)}
			enableEdit={enableEdit}
			enableDelete={enableDelete}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		>
			<ResourceDetails
				label={resource?.label}
				image={resource?.image?.url}
				primary={resource?.title}
				secondary={resource?.description}
				resource={resource}
				fields={fields}
			/>
		</ResourceModal>
	)
}

export default DataShow

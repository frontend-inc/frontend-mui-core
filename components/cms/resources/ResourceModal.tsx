'use client'

import React from 'react'
import { Drawer, CircularLoader } from '../..'
import { Button, Stack } from '../../../tailwind'

export type ResourceModalProps = {
	title?: string
	open: boolean
	handleClose: () => void
	loading?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	handleEdit?: () => void
	handleDelete?: () => void
	disablePadding?: boolean
	children?: any
}

const ResourceModal: React.FC<ResourceModalProps> = (props) => {
	const {
		loading,
		title,
		open,
		handleClose,
		children,
		enableEdit,
		enableDelete,
		handleEdit,
		handleDelete,
		disablePadding,
	} = props || {}

	return (
		<Drawer
			mode="editor"
			open={open}
			handleClose={handleClose}
			title={title}
			disablePadding={disablePadding}
			buttons={
				(enableEdit || enableDelete) && (
					<div className="w-fill flex flex-row space-x-2">
						{enableEdit && (
							<Button
								fullWidth
								variant="contained"
								color="primary"
								onClick={handleEdit}
							>
								Edit
							</Button>
						)}
						{enableDelete && (
							<Button
								fullWidth
								variant="contained"
								color="secondary"
								onClick={handleDelete}
							>
								Delete
							</Button>
						)}
					</div>
				)
			}
		>
			{loading == true ? <CircularLoader size={44} /> : children}
		</Drawer>
	)
}

export default ResourceModal

'use client'

import React from 'react'
import { ResourceToolbarModal } from '../..'
import ResourceToolbarButtons from './toolbar/ResourceToolbarButtons'

type ResourceToolbarModalProps = {
	open: boolean
	handleClose: () => void
	actions: React.ReactNode
	selected: any[]
	selectedIds: number[] | string[]
	buttons: {
		color?: 'primary' | 'secondary'
		variant?: 'contained' | 'outlined'
		icon?: string
		label: string
		onClick: (selected: any[]) => void
	}[]
	component?: React.FC<any>
}

const ResourceToolbar: React.FC<ResourceToolbarModalProps> = (props) => {
	const {
		open,
		selected,
		selectedIds,
		handleClose,
		buttons,
		component: Component = ResourceToolbarButtons,
		...rest
	} = props || {}

	return (
		<ResourceToolbarModal open={open} handleClose={handleClose}>
			<Component
				selected={selected}
				selectedIds={selectedIds}
				buttons={buttons}
				{...rest}
			/>
		</ResourceToolbarModal>
	)
}

export default ResourceToolbar

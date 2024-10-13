'use client'

import React from 'react'
import { Typography } from '../../../tailwind'
import { Icon, Image, MenuButton, TouchableOpacity } from '../..'
import { Checkbox } from '../../../shadcn/ui/checkbox'

type DataListItemProps = {
	sortable?: boolean
	selectable?: boolean
	selected?: boolean
	label?: string
	primary: string
	secondary?: string
	actions?: React.ReactNode
	secondaryAction?: React.ReactNode
	image?: string
	height?: number
	handleClick?: () => void
	handleEdit?: () => void
	handleDelete?: () => void
	handleSelect?: () => void
	slots?: {
		item?: any
		image?: any
	}
}

const DataListItem: React.FC<DataListItemProps> = (props) => {
	const {
		sortable,
		selectable,
		selected,
		label,
		primary,
		secondary,
		actions,
		secondaryAction,
		height = 180,
		image,
		handleClick,
		handleEdit,
		handleDelete,
		handleSelect,
		slots = {
			item: {},
			image: {},
		},
	} = props || {}

	const handleChange = () => {
		if (handleSelect) {
			handleSelect()
		}
	}

	return (
		<div className="w-full flex flex-row pt-1 pb-2 overflow-hidden border-b border-divider bg-background">
			<div className="w-full flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-1">
				<div className="flex flex-row items-start">
					{selectable && (
						<Checkbox
							checked={selected}
							onCheckedChange={handleChange}
							className="mr-2"
						/>
					)}
					{sortable && (
						<Icon name="GripVertical" className="text-muted-foreground" />
					)}
					<div className="pr-0 sm:pr-2 mr-0 sm:mr-2 w-full sm:w-[220px] sm:min-w-[220px] h-full">
						<TouchableOpacity handleClick={handleClick}>
							<Image
								label={label}
								src={image}
								height={height}
								alt={primary}
								{...slots.image}
							/>
						</TouchableOpacity>
					</div>
				</div>
				<div className="flex flex-row space-x-1 w-full">
					<div className="flex flex-col justify-between items-start h-full w-full py-0 sm:py-1">
						<div className="flex flex-col space-y-0.5">
							<Typography color="text.primary" variant="subtitle2">
								{primary}
							</Typography>
							<Typography color="text.secondary" variant="body2">
								{secondary}
							</Typography>
						</div>
						<div className="flex flex-row justify-end">{actions}</div>
					</div>
					<div className="flex flex-row justify-end">
						{(handleEdit || handleDelete) && (
							<MenuButton handleEdit={handleEdit} handleDelete={handleDelete}>
								{secondaryAction}
							</MenuButton>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default DataListItem

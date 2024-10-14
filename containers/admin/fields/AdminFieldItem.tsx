'use client'

import React, { useEffect } from 'react'
import { Label, ResourceListItem } from '../../../components'
import { FieldIcon } from '../..'
import { Typography, IconButton } from '../../../tailwind'
import { FilterIcon, SortAsc, Search } from 'lucide-react'
import { useResource } from 'frontend-js'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '../../../shadcn/ui/tooltip'

type AdminFieldItemProps = {
	url: string
	resource: any
	sortable?: boolean
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
	handleReload: () => void
}

const AdminFieldItem: React.FC<AdminFieldItemProps> = (props) => {
	const {
		url,
		resource,
		sortable,
		handleClick,
		handleEdit,
		handleDelete,
		handleReload,
	} = props

	const {
		loading,
		resource: field,
		setResource: setField,
		update: updateField,
	} = useResource({
		url,
		name: 'field',
	})

	const handleUpdateField = async (name: string) => {
		let newField = {
			...field,
			[name]: field[name] == true ? false : true,
		}
		setField(newField)
		await updateField(newField)
	}

	useEffect(() => {
		setField(resource)
	}, [resource])

	return (
		<ResourceListItem
			enableBorder
			sortable={sortable}
			avatar={<FieldIcon variant={field?.variant} />}
			primary={
				<div className="flex flex-row space-x-1">
					<Typography variant="body1" >
						{field?.label}
					</Typography>
					<Label label={field.variant} />
				</div>
			}
			secondaryAction={
				<>
					{field.column && !field.array && (
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<IconButton onClick={() => handleUpdateField('filter_field')}>
										<FilterIcon
											className={
												field.filter_field
													? 'text-foreground'
													: 'text-muted-foreground'
											}
										/>
									</IconButton>
								</TooltipTrigger>
								<TooltipContent>
									<p>Search filter field</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					)}
					{field.column && !field.array && (
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<IconButton onClick={() => handleUpdateField('sort_field')}>
										<SortAsc
											className={
												field.sort_field
													? 'text-foreground'
													: 'text-muted-foreground'
											}
										/>
									</IconButton>
								</TooltipTrigger>
								<TooltipContent>
									<p>Search sort field</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					)}
					{(field.column || field.attachment) && field?.name != 'title' && (
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<IconButton
										onClick={() => handleUpdateField('display_field')}
									>
										<Search
											className={
												field.display_field
													? 'text-foreground'
													: 'text-muted-foreground'
											}
										/>
									</IconButton>
								</TooltipTrigger>
								<TooltipContent>
									<p>Display in search results</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					)}
				</>
			}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminFieldItem

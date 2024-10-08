import React, { useState, useEffect } from 'react'
import {
	closestCenter,
	DndContext,
	DragOverlay,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core'
import {
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { Box, Button, List, Typography, Stack } from '@mui/material'
import Droppable from './Droppable'
import { Icon, KanBanCard } from '../..'

type KanBanBoardProps = {
	loading?: boolean
	headers: {
		label: string
		value: string
	}[]
	handleClick: (resource: any) => void
	handleDrop: (movedItem: any, overContainer: string, columns: any[]) => void
	columns: Record<string, any>
	enableEdit?: boolean
	enableDelete?: boolean
	enableCreate?: boolean
	handleEdit: (resource: any) => void
	handleDelete: (resource: any) => void
	handleAdd: (status: string) => void
	component?: React.FC<any>
	slots?: {
		list?: any
		item?: any
	}
}

const KanBanBoard: React.FC<KanBanBoardProps> = (props) => {
	const {
		loading,
		headers = [],
		handleDrop,
		columns: initialColumns = {},
		handleClick,
		enableEdit,
		enableDelete,
		enableCreate,
		handleEdit,
		handleDelete,
		handleAdd,
		component: Component = KanBanCard,
		slots = {
			list: {},
			item: {},
		},
	} = props

	const [activeId, setActiveId] = useState(null)
	const [columns, setColumns] = useState(initialColumns)

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	)

	const draggedResource = activeId ? findResourceById(activeId) : null

	useEffect(() => {
		if (initialColumns) {
			setColumns(initialColumns)
		}
	}, [initialColumns])

	if (headers.length === 0) return null
	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
		>
			<Stack sx={sx.container} direction="row" spacing={1}>
				{headers?.map((header) => (
					<Stack
						sx={sx.column}
						key={header.value}
						direction="column"
						spacing={1}
						justifyContent="space-between"
					>
						<Box>
							<Typography variant="subtitle2" color="text.primary">
								{header.label}
							</Typography>
							<SortableContext
								key={header.value}
								items={columns[header.value]?.map((res) => res.id)}
								strategy={verticalListSortingStrategy}
							>
								<List sx={sx.cardList} {...slots.list} disablePadding>
									{columns[header.value].length > 0 ? (
										columns[header.value]?.map((res) => (
											<Component
												{...slots.item}
												loading={loading}
												key={res?.id}
												id={res?.id}
												resource={res}
												handleClick={() => handleClick(res)}
												enableEdit={enableEdit}
												enableDelete={enableDelete}
												handleEdit={() => handleEdit(res)}
												handleDelete={() => handleDelete(res)}
												component={Component}
											/>
										))
									) : (
										<Droppable id={header.value} />
									)}
									<Droppable id={header.value} />
								</List>
							</SortableContext>
						</Box>
						{enableCreate && (
							<Button
								fullWidth
								variant="contained"
								color="secondary"
								onClick={() => handleAdd(header.value)}
								startIcon={<Icon name="Plus" color="secondary.contrastText" />}
							>
								Add
							</Button>
						)}
					</Stack>
				))}
			</Stack>
			<DragOverlay>
				{draggedResource ? (
					<Component
						enableDragging
						id={draggedResource?.id}
						resource={draggedResource}
						{...slots.item}
					/>
				) : null}
			</DragOverlay>
		</DndContext>
	)

	function handleDragStart(event) {
		const { active } = event
		setActiveId(active.id)
	}

	function handleDragEnd(event) {
		const { active, over } = event

		if (over) {
			const activeContainer = findContainer(active.id)
			const overContainer = findContainer(over.id) || over.id

			if (activeContainer && overContainer) {
				let newColumns
				let movedItem

				if (activeContainer === overContainer) {
					const items = columns[activeContainer]
					const oldIndex = items.findIndex((item) => item.id === active.id)
					const newIndex = items.findIndex((item) => item.id === over.id)

					newColumns = {
						...columns,
						[activeContainer]: arrayMove(items, oldIndex, newIndex),
					}
					movedItem = items[oldIndex]
				} else {
					const activeItems = columns[activeContainer]
					const overItems = columns[overContainer] || [] // Handle empty columns
					const activeIndex = activeItems.findIndex(
						(item) => item.id === active.id
					)

					const newActiveItems = [...activeItems]
					const newOverItems = [...overItems]

					;[movedItem] = newActiveItems.splice(activeIndex, 1)

					let insertIndex = 0
					if (!String(over.id).startsWith('placeholder')) {
						const overIndex = overItems.findIndex((item) => item.id === over.id)
						insertIndex = overIndex
					}

					// Insert at the dropped position
					newOverItems.splice(insertIndex, 0, movedItem)

					newColumns = {
						...columns,
						[activeContainer]: newActiveItems,
						[overContainer]: newOverItems,
					}
				}
				setColumns(newColumns)
				handleDrop(movedItem, overContainer, newColumns)
			}
		}
		setActiveId(null)
	}

	function findResourceById(id) {
		for (const column in columns) {
			const resource = columns[column].find((item) => item.id === id)
			if (resource) {
				return resource
			}
		}
		return null
	}

	function findContainer(id) {
		return Object.keys(columns).find((key) =>
			columns[key].some((item) => item.id === id)
		)
	}
}

export default KanBanBoard

const sx = {
	container: {
		px: 0.5,
		py: 2,
		width: '100%',
		overflowX: 'scroll',
	},
	loading: {
		opacity: 0.5,
	},
	cardList: {
		width: 260,
		maxHeight: '100vh',
		overflowY: 'scroll',
		overflowX: 'hidden',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	column: {
		p: 1,
		width: 280,
		minWidth: 280,
		overflowX: 'hidden',
		borderRadius: 1,
		transition: 'box-shadow 0.2s',
		boxShadow: 2,
		'&:hover': {
			boxShadow: 4,
		},
	},
}

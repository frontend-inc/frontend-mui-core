'use client'

import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'
import { cn } from '../../../shadcn/lib/utils'

type SortableListProps = {
	items: any[]
	droppableId?: string
	renderItem: (item: any, index: number, props: any) => React.ReactNode
	handleDrop: (items: any[]) => void
}

export default function SortableList({
	items,
	droppableId = 'sortable-list',
	renderItem,
	handleDrop,
}: SortableListProps) {
	const [sorted, setSorted] = useState(items)

	const reorder = (items: any[], startIndex: number, endIndex: number) => {
		const [removed] = items.splice(startIndex, 1)
		items.splice(endIndex, 0, removed)
		return items.map((item: any, index: number) => ({
			...item,
			position: index + 1,
		}))
	}

	const onDragEnd = (result: any) => {
		if (!result.destination) {
			return items
		}
		const sortedItems = reorder(
			items,
			result.source.index,
			result.destination.index
		)
		setSorted(sortedItems)
		handleDrop(sorted)
	}

	useEffect(() => {
		setSorted(items)
	}, [items])

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId={String(droppableId)}>
				{(provided) => (
					<div
						className="w-full"
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						<div className="flex flex-col space-y-2 w-full overflow-y-scroll scrollbar-hide">
							{sorted?.map((item, index) => (
								<Draggable
									key={item?.id || index}
									draggableId={String(item?.id || index)}
									index={index}
								>
									{(provided, snapshot) => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											className={cn('transition-colors duration-200')}
										>
											{renderItem(
												{
													...item,
													isDragging: snapshot.isDragging,
												},
												index,
												{ items, droppableId, renderItem, handleDrop }
											)}
										</div>
									)}
								</Draggable>
							))}
						</div>
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	)
}

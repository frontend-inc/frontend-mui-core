'use client'

import React, { useEffect, useState } from 'react'

type UseDragDropProps = {
	columns: any[]
	children?: any[]
}

const useDragDrop = (props: UseDragDropProps) => {
	const { children } = props
	const [columns, setColumns] = useState(children)

	const reorder = (items, startIndex, endIndex) => {
		const [removed] = items.splice(startIndex, 1)
		items.splice(endIndex, 0, removed)
		let sorted = items.map((item, index) => ({
			...item,
			position: index,
		}))
		return sorted
	}

	const reorderColumns = (items, startIndex, endIndex) => {
		const sorted = reorder(items, startIndex, endIndex)
		return {
			event: 'SORT_COLUMNS',
			columns: sorted,
		}
	}

	const reorderChildren = (columns, source, destination) => {
		const current = columns.find((i) => String(i.id) == source.droppableId)
		const next = columns.find((i) => String(i.id) == destination.droppableId)
		let target = current.children[source.index]

		// moving to same list
		if (source.droppableId === destination.droppableId) {
			const sorted = reorder(current.children, source.index, destination.index)
			const updatedColumns = columns.map((col) => {
				if (String(col.id) == source.droppableId) {
					return {
						...col,
						children: sorted,
					}
				} else {
					return col
				}
			})
			return { event: 'SORT_CHILDREN', columns: updatedColumns, sorted: sorted }
		} else {
			// moving to different list
			// remove from original
			current.children.splice(source.index, 1)
			// insert into next
			next.children.splice(destination.index, 0, target)
			const updatedColumns = columns.map((col) => {
				if (String(col.id) == source.droppableId) {
					return current
				} else if (String(col.id) == destination.droppableId) {
					return next
				} else {
					return col
				}
			})
			target.parent_id = next.id
			return {
				event: 'MOVE_CHILDREN',
				target,
				sorted: next?.children,
				columns: updatedColumns,
			}
		}
	}

	useEffect(() => {
		setColumns(props.columns)
	}, [props.columns])

	return {
		columns,
		setColumns,
		reorder,
		reorderColumns,
		reorderChildren,
	}
}

export default useDragDrop

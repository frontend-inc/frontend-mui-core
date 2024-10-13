'use client'

import React, { useEffect, useState } from 'react'

const useSelected = () => {
	const [selected, setSelected] = useState<any[]>([])
	const [selectedIds, setSelectedIds] = useState<number[]>([])

	const handleSelect = (item) => {
		if (selectedIds.find((id) => id === item.id)) {
			setSelected(selected.filter((i) => i.id != item.id))
		} else {
			setSelected(selected.concat(item))
		}
	}

	const handleClear = () => {
		setSelected([])
	}

	useEffect(() => {
		if (selected) {
			setSelectedIds(selected.map((item) => item.id))
		}
	}, [selected])

	return {
		selected,
		selectedIds,
		setSelected,
		setSelectedIds,
		handleSelect,
		handleClear,
	}
}

export default useSelected

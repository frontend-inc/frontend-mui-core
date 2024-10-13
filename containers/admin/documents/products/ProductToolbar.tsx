'use client'

import React from 'react'
import { Button } from '../../../../shadcn/ui/button'
import { Collapse } from '../../../../tailwind'

type ProductToolbarProps = {
	open: boolean
	handleAddProducts: (productIds: number[]) => void
	handleClose: () => void
	selectedIds: number[]
	handleReload: () => void
}

const ProductToolbar: React.FC<ProductToolbarProps> = (props) => {
	const { open, handleAddProducts, handleClose, selectedIds, handleReload } =
		props || {}

	const handleAdd = async () => {
		await handleAddProducts(selectedIds)
		handleReload()
		handleClose()
	}

	return (
		<Collapse in={open}>
			<div className="w-full flex flex-row space-x-1 pb-10">
				<Button className="w-full" onClick={handleAdd}>
					Add Products
				</Button>
			</div>
		</Collapse>
	)
}

export default ProductToolbar

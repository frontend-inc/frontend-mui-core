'use client'

import React from 'react'
import CellButton from './CellButton'

type CellProductsProps = {
	value: any
}

const CellProducts: React.FC<CellProductsProps> = (props) => {
	const { value } = props
	return <CellButton icon="Box">Products</CellButton>
}

export default CellProducts

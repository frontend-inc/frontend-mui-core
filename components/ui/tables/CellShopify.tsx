'use client'

import React from 'react'
import { CellString } from '../..'
import { truncate } from '../../../helpers'

type CellShopifyProps = {
	value?: string
}

const CellShopify: React.FC<CellShopifyProps> = (props) => {
	const { value } = props
	return <CellString variant="body2" value={truncate(value, 250)} />
}

export default CellShopify

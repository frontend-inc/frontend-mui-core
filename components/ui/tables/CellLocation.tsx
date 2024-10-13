'use client'

import React from 'react'
import { CellString } from '../..'
import { truncate } from '../../../helpers'

type CellLocationProps = {
	value?: string
}

const CellLocation: React.FC<CellLocationProps> = (props) => {
	const { value } = props
	return <CellString variant="body2" value={truncate(value, 250)} />
}

export default CellLocation

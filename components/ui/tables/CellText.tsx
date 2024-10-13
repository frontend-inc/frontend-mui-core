'use client'

import React from 'react'
import { CellString } from '../../../components'
import { truncate } from '../../../helpers'

type CellTextProps = {
	value?: string
}

const CellText: React.FC<CellTextProps> = (props) => {
	const { value } = props
	return <CellString variant="body2" value={truncate(value, 250)} />
}

export default CellText

'use client'

import React from 'react'
import { Label } from '../../../components'

type CellBooleanProps = {
	value: boolean
}

const CellBoolean: React.FC<CellBooleanProps> = (props) => {
	const { value } = props
	return <Label label={value ? 'True' : 'False'} />
}

export default CellBoolean

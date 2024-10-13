'use client'

import React from 'react'
import { Typography } from '../../../tailwind'
import { TypographyVariantsType } from '../../../types'
import moment from 'moment'

type CellDateProps = {
	value: string
	variant?: TypographyVariantsType
}
const CellDate: React.FC<CellDateProps> = (props) => {
	const { value, variant = 'caption' } = props
	let formattedValue = moment(value).format('MM/DD/YYYY')
	return <Typography variant={variant}>{formattedValue}</Typography>
}

export default CellDate

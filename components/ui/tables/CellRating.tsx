'use client'

import React from 'react'
import { Rating } from '../../../tailwind'

type CellRatingProps = {
	value: number
}

const CellRating: React.FC<CellRatingProps> = (props) => {
	const { value = 0 } = props
	return <Rating readOnly value={value} />
}

export default CellRating

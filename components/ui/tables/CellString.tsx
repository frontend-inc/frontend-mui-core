'use client'

import React from 'react'
import { Typography } from '../../../tailwind'
import { TypographyVariantsType } from '../../../types'

type CellStringProps = {
	value: string
	variant?: TypographyVariantsType
}

const CellString: React.FC<CellStringProps> = (props) => {
	const { value, variant = 'body2' } = props
	return (
		<Typography
			className="max-w-[200px] overflow-x-auto whitespace-nowrap"
			variant={variant}
		>
			{value}
		</Typography>
	)
}

export default CellString

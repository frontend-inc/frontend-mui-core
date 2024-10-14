'use client'

import React from 'react'
import { Typography } from '../../../tailwind'
import { NumberRangeInput } from '../../../components'
import { NumberRangeInputProps } from './NumberRangeInput'

type PriceRangeInputProps = NumberRangeInputProps & {
	currency: string
}

const PriceRangeInput: React.FC<PriceRangeInputProps> = (props) => {
	const { currency, ...rest } = props || {}
	return (
		<NumberRangeInput
			{...rest}
			startAdornment={
				<Typography variant="body2">
					{currency}
				</Typography>
			}
		/>
	)
}

export default PriceRangeInput

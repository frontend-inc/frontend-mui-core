'use client'

import React from 'react'
import { FieldString } from '../../../components'
import { FieldElementProps } from './Field'

type FieldPriceProps = FieldElementProps & {
	rest?: any
	currency?: string
	digits?: number
}

const FieldPrice: React.FC<FieldPriceProps> = (props) => {
	const { value, currency = 'USD', digits = 2, rest } = props

	const price = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: currency,
		maximumFractionDigits: digits,
		minimumFractionDigits: digits,
	}).format(value)

	return <FieldString value={isNaN(value) ? '-' : price} {...rest} />
}

export default FieldPrice

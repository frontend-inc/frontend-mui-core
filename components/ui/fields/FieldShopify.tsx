'use client'

import React from 'react'
import { FieldString } from '../..'
import { TypographyVariantsType } from '../../../types'
import { FieldElementProps } from './Field'

const FieldShopify: React.FC<FieldElementProps> = (props) => {
	const { value, label, variant, color, placeholder, disableLabel } = props
	return (
		<FieldString
			variant={variant}
			value={value}
			label={label}
			color={color}
			placeholder={placeholder}
			disableLabel={disableLabel}
		/>
	)
}

export default FieldShopify

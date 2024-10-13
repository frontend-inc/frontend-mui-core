'use client'

import React from 'react'
import { ExpandableText, FieldWrapper } from '../../../components'
import { FieldElementProps } from './Field'

type FieldTextProps = FieldElementProps & {
	maxChars?: number
}

const FieldText: React.FC<FieldTextProps> = (props) => {
	const {
		value,
		label,
		variant,
		color,
		placeholder,
		disableLabel,
		maxChars = 80,
		...rest
	} = props
	return (
		<FieldWrapper label={label} color={color} disableLabel={disableLabel}>
			<ExpandableText text={value || placeholder} maxChars={maxChars} />
		</FieldWrapper>
	)
}

export default FieldText

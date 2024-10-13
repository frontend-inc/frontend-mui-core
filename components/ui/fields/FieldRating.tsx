'use client'

import React from 'react'
import { Rating } from '../../../tailwind'
import { FieldWrapper } from '../../../components'
import { FieldElementProps } from './Field'

type FieldRatingProps = FieldElementProps & {
	size?: 'sm' | 'md' | 'lg'
}

const FieldRating: React.FC<FieldRatingProps> = (props) => {
	const { value, label, size = 'md', color, disableLabel } = props
	return (
		<FieldWrapper label={label} color={color} disableLabel={disableLabel}>
			<Rating size={size} readOnly value={value} />
		</FieldWrapper>
	)
}

export default FieldRating

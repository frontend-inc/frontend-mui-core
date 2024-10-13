'use client'

import React from 'react'
import { NoImage, FieldWrapper } from '../../../components'
import { FieldElementProps } from './Field'

const FieldVideo: React.FC<FieldElementProps> = (props) => {
	const { value, label, color, disableLabel } = props

	return (
		<FieldWrapper label={label} color={color} disableLabel={disableLabel}>
			{value ? <video src={value} controls muted autoPlay /> : <NoImage />}
		</FieldWrapper>
	)
}

export default FieldVideo

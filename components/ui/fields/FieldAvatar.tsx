'use client'

import React from 'react'
import { FieldWrapper, Avatar } from '../../../components'
import { FieldElementProps } from './Field'

type FieldAvatarProps = FieldElementProps & {
	size?: number
	variant?: 'circle' | 'rounded'
}

const FieldAvatar: React.FC<FieldAvatarProps> = (props) => {
	const { value, label, color, size = 32, variant, disableLabel } = props
	return (
		<FieldWrapper label={label} color={color} disableLabel={disableLabel}>
			<Avatar src={value} size={size} variant={variant} />
		</FieldWrapper>
	)
}

export default FieldAvatar

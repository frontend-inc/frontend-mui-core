'use client'

import React from 'react'
import { Image, FieldWrapper } from '../../../components'
import { FieldElementProps } from './Field'

type FieldImageProps = FieldElementProps & {
	height?: number
	width?: number
}

const FieldImage: React.FC<FieldImageProps> = (props) => {
	const { label, value, height = 140, width, color, disableLabel } = props
	if (!value) return null
	return (
		<FieldWrapper color={color} label={label} disableLabel={disableLabel}>
			<div
				style={{
					height: `${height}px`,
					width: width ? `${width}px` : 'auto',
				}}
			>
				<Image
					aspectRatio={1.0}
					alt={label || 'Image'}
					src={value?.url || value}
					height={height}
				/>
			</div>
		</FieldWrapper>
	)
}

export default FieldImage

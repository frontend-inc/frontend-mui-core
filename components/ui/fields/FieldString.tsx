'use client'

import React from 'react'
import { Typography } from '../../../tailwind'
import { FieldWrapper } from '../../../components'
import { FieldElementProps } from './Field'
import { truncate } from '../../../helpers'

const FieldString: React.FC<FieldElementProps> = (props) => {
	const {
		value,
		label,
		color = 'text.primary',
		placeholder,
		alignItems,
		disableLabel = false,
    className,
		...rest
	} = props

	return (
		<FieldWrapper
			alignItems={alignItems}
			label={label}
			color={color}
			disableLabel={disableLabel}
			{...rest}
		>
			<Typography variant='body1' color='text-foreground' className={className}>
				{truncate(value || placeholder, 50)}
			</Typography>
		</FieldWrapper>
	)
}

export default FieldString

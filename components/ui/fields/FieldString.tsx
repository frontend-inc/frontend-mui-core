import React from 'react'
import { Typography } from '@mui/material'
import { FieldWrapper } from '../../../components'
import { FieldElementProps } from './Field'
import { truncate } from '../../../helpers'

const FieldString: React.FC<FieldElementProps> = (props) => {
	const {
		value,
		label,
		color = 'text.primary',
		placeholder,
		variant = 'body1',
		alignItems,
		...rest
	} = props

	return (
		<FieldWrapper alignItems={alignItems} label={label} color={color} {...rest}>
			<Typography variant={variant} color={color} sx={sx.text}>
				{truncate(value || placeholder, 50)}
			</Typography>
		</FieldWrapper>
	)
}

export default FieldString

const sx = {
	text: {
		whiteSpace: 'pre-wrap',
	},
}

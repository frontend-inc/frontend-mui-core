import React from 'react'
import { DisplayField } from '../../..'
import { DisplayFieldType } from '../../../../types'
import { Stack } from '@mui/material'

type DisplayFieldsProps = {
	fields: DisplayFieldType[]
	resource: any
	alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
}

const DisplayFields: React.FC<DisplayFieldsProps> = (props) => {
	const { fields, resource, alignItems = 'flex-start' } = props || {}

	return (
		<Stack
			sx={sx.root}
			direction="column"
			spacing={0.5}
			alignItems={alignItems}
		>
			{fields?.map((field, index) => (
				<DisplayField
					key={index}
					field={field}
					resource={resource}
				/>
			))}
		</Stack>
	)
}

export default DisplayFields

const sx = {
	root: {
		width: '100%',
	},
}

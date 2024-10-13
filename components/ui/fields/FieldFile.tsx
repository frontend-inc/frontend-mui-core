'use client'

import React from 'react'
import { Stack, Link } from '../../../tailwind'
import { Icon, FieldWrapper } from '../../../components'
import { FieldElementProps } from './Field'

const FieldFile: React.FC<FieldElementProps> = (props) => {
	const { value, label, color = 'text.secondary', disableLabel } = props
	return (
		<FieldWrapper label={label} color={color} disableLabel={disableLabel}>
			<Stack direction="row" spacing={1}>
				<Icon name="File" color="text.primary" />
				{value?.content_type && (
					<Link href={value?.url || '#'}>{value?.content_type}</Link>
				)}
			</Stack>
		</FieldWrapper>
	)
}

export default FieldFile

'use client'

import React from 'react'
import Link from 'next/link'
import { FieldWrapper } from '../../../components'
import { FieldElementProps } from './Field'

const FieldURL: React.FC<FieldElementProps> = (props) => {
	const { value, label, color, disableLabel } = props

	return (
		<FieldWrapper label={label} color={color} disableLabel={disableLabel}>
			{value && (
				<Link
					className="p-0 h-auto text-muted-foreground hover:text-foreground"
					href={value || '#'}
					target="_blank"
					rel="noopener noreferrer"
				>
					{value}
				</Link>
			)}
		</FieldWrapper>
	)
}

export default FieldURL

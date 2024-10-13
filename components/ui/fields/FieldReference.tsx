'use client'

import React from 'react'
import { Button } from '../../../tailwind'
import { FieldWrapper } from '../../../components'
import { Repeat2 } from 'lucide-react'
import { FieldElementProps } from './Field'

type FieldReferenceProps = FieldElementProps & {
	displayValue?: any
	headerName?: any
	handleClick?: () => void
}

const FieldReference: React.FC<FieldReferenceProps> = (props) => {
	const { value, label, color, handleClick, disableLabel } = props

	return (
		<FieldWrapper label={label} color={color} disableLabel={disableLabel}>
			<Button
				color="primary"
				variant="outlined"
				endIcon={<Repeat2 className="w-5 h-5" />}
				onClick={handleClick}
			>
				{value}
			</Button>
		</FieldWrapper>
	)
}

export default FieldReference

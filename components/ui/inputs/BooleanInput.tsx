'use client'

import React from 'react'
import { TabsInput } from '../..'
import { SyntheticEventType } from '../../../types'

type BooleanInputProps = {
	value: boolean
	name: string
	handleChange: (ev: SyntheticEventType) => void
	label?: string		
	info?: string	
}

const BooleanInput: React.FC<BooleanInputProps> = (props) => {
	const {
		name,
		value,
		handleChange,
		label,
		info,
	} = props

	const handleTabChange = (ev) => {
		const newValue = ev.target.value == 'yes' ? true : false
		handleChange({
			target: {
				name,
				value: newValue,
			},
		})
	}

	return (
		<TabsInput
			name={name}
			label={label}
			info={info}			
			options={[
				{ label: 'No', value: 'no' },
				{ label: 'Yes', value: 'yes' },
			]}
			value={value == true ? 'yes' : 'no'}
			handleChange={handleTabChange}
		/>
	)
}

export default BooleanInput

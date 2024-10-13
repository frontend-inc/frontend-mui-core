'use client'

import React from 'react'
import { TextInput } from '../../../../components'
import { SyntheticEventType } from '../../../../types'

type AiPromptFormProps = {
	open: boolean
	value: string
	label?: string
	placeholder?: string
	handleChange: (ev: SyntheticEventType) => void
}

const AiPromptForm: React.FC<AiPromptFormProps> = (props) => {
	const {
		label = 'Prompt',
		placeholder = 'Enter a prompt',
		value,
		handleChange,
	} = props

	return (
		<div className="flex flex-col space-y-2">
			<TextInput				
				label={label}
				name="prompt"
				placeholder={placeholder}
				value={value}
				handleChange={handleChange}
			/>
		</div>
	)
}

export default AiPromptForm

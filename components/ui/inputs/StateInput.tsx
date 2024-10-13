'use client'

import React from 'react'
import { Autosuggest } from '../../../components'
import { STATES } from '../../../constants'
import { SelectInputPropsType } from '../../..'

const StateInput: React.FC<SelectInputPropsType> = (props) => {
	const { name, label, errors, value, handleChange } = props || {}

	return (
		<Autosuggest
			name={name}
			label={label}
			value={value}
      //@ts-ignore
			options={STATES}
			handleChange={handleChange}
		/>
	)
}

export default StateInput

'use client'

import React from 'react'
import { Autosuggest } from '../..'
import { COUNTRIES } from '../../../constants'
import { SelectInputPropsType } from '../../..'

const CountryInput: React.FC<SelectInputPropsType> = (props) => {
	const { name, label, errors, value, handleChange } = props || {}

	return (
		<Autosuggest
			name={name}
			label={label}
			errors={errors}
			value={value}
      //@ts-ignore
			options={COUNTRIES}
			handleChange={handleChange}
		/>
	)
}

export default CountryInput

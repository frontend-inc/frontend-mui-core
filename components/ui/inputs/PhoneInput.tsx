'use client'

import React from 'react'
import { TextInput } from '../..'
import { InputPropsType } from '../../../types'

const PhoneInput: React.FC<InputPropsType> = (props) => {
	return <TextInput {...props} type="tel" />
}

export default PhoneInput

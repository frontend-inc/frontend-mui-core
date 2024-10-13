'use client'

import React from 'react'
import { TextInput } from '../..'
import { InputPropsType } from '../../../types'

const EmailInput: React.FC<InputPropsType> = (props) => {
	return <TextInput {...props} type="email" />
}

export default EmailInput

'use client'

import React from 'react'
import { TextInput } from '../..'
import { InputPropsType } from '../../../types'

const URLInput: React.FC<InputPropsType> = (props) => {
	return <TextInput {...props} type="url" />
}

export default URLInput

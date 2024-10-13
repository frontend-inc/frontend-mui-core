'use client'

import React from 'react'
import { FieldString } from '../../../components'
import { FieldElementProps } from './Field'

const FieldJSON: React.FC<FieldElementProps> = (props) => {
	const { value, ...rest } = props
	return <FieldString {...rest} value={JSON.stringify(value, null, 2)} />
}

export default FieldJSON

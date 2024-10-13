'use client'

import React from 'react'
import { FieldString } from '../..'
import { FieldElementProps } from './Field'

const FieldLocation: React.FC<FieldElementProps> = (props) => {
	return <FieldString {...props} />
}

export default FieldLocation

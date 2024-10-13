'use client'

import React from 'react'
import { Calendly } from '../..'
import { get } from 'lodash'

export type FieldCalendlyProps = {
	fieldName: string
	resource: any
	buttonText?: string
}

const FieldCalendly: React.FC<FieldCalendlyProps> = (props) => {
	const { resource, fieldName, buttonText, ...rest } = props || {}
	const value = get(resource, fieldName)
	return <Calendly calendlyUrl={value} buttonText={buttonText} {...rest} />
}

export default FieldCalendly

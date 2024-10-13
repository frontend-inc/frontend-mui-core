'use client'

import React from 'react'
import { FieldString } from '../../../components'
import moment from 'moment'
import { FieldElementProps } from './Field'

const FieldDate: React.FC<FieldElementProps> = (props) => {
	const { value, label, disableLabel } = props
	let formattedValue = moment(value).format('MM/DD/YYYY')
	return (
		<FieldString
			label={label}
			value={formattedValue}
			disableLabel={disableLabel}
		/>
	)
}

export default FieldDate

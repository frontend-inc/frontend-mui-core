'use client'

import React from 'react'
import { GoogleMap } from '../..'
import { DisplayFieldType } from '../../../types'

export type FieldGoogleMapProps = {
	fieldName: string
	resource: any
	zoom?: number
	displayFields?: DisplayFieldType[]
	darkTheme?: boolean
}

const FieldGoogleMap: React.FC<FieldGoogleMapProps> = (props) => {
	const {
		resource,
		zoom = 16,
		darkTheme = false,
		displayFields = [],
	} = props || {}

	return (
		<GoogleMap
			darkTheme={darkTheme}
			zoom={zoom}
			resources={[resource]}
			displayFields={displayFields}
		/>
	)
}

export default FieldGoogleMap

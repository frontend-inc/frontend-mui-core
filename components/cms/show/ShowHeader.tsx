'use client'

import React from 'react'
import { PageHeader } from '../..'
import { ButtonType } from '../../../types'

export type ShowHeaderProps = {
	resource: any & {
		title?: string
		subtitle?: string
		label?: string
	}
	links: {
		label: string
		path: string
	}[]
	maxLinks?: number
	buttons: ButtonType[]
	enableBorder?: boolean
}

const ShowHeader: React.FC<ShowHeaderProps> = (props) => {
	const { resource, ...rest } = props
	const { title, label } = resource || {}
	return <PageHeader label={label} title={title} {...rest} />
}

export default ShowHeader

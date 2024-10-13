'use client'

import React from 'react'
import { SocialFieldType } from '../../../types'
import { SocialLink } from '../..'
import { get } from 'lodash'

type SocialFieldProps = {
	field: SocialFieldType
	resource: any
}

const SocialField: React.FC<SocialFieldProps> = (props) => {
	const { field, resource } = props || {}
	const { provider, name } = field || {}
	let url = get(resource, name)
	return <SocialLink provider={provider} url={url} />
}

export default SocialField

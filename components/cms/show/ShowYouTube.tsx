'use client'

import React from 'react'
import { YouTubeEmbed } from '../..'
import { ShowProps } from './ShowItem'
import { get } from 'lodash'
import ShowLayout from './ShowLayout'

export type ShowYouTubeProps = ShowProps & {
	fieldName: string
}

const ShowYouTube: React.FC<ShowYouTubeProps> = (props) => {
	const {
		buttons,
		resource,
		fieldName,
		displayFields = [],
		...rest
	} = props || {}
	const src = get(resource, fieldName)
	return (
		<ShowLayout
			buttons={buttons}
			resource={resource}
			displayFields={displayFields}
			{...rest}
		>
			<YouTubeEmbed src={src} />
		</ShowLayout>
	)
}

export default ShowYouTube

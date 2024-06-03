import React from 'react'
import { YouTubeEmbed } from '../../..'
import { HeroProps } from '../Hero'
import { flattenDocument } from 'frontend-js'
import HeroContainer from '../HeroContainer'

type HeroYouTubeProps = HeroProps & {
	fieldName: string
}

const HeroYouTube: React.FC<HeroYouTubeProps> = (props) => {
	const { actions, resource, fieldName, ...rest } = props || {}
	const src = flattenDocument(resource)[fieldName]
	return (
		<HeroContainer {...rest} actions={actions} resource={resource}>
			<YouTubeEmbed src={src} />
		</HeroContainer>
	)
}

export default HeroYouTube

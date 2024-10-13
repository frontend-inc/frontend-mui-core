'use client'

import React from 'react'

type YouTubeEmbedProps = {
	src: string
	height?: number
	width?: number
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = (props) => {
	const { src, height = 315, width = 560 } = props

	return (
		<div>
			<iframe
				width={width}
				height={height}
				src={src}
				frameBorder="0"
				allowFullScreen
				title="Embedded YouTube video"
				style={{
					aspectRatio: '16 / 9',
					width: '100%',
				}}
			/>
		</div>
	)
}

export default YouTubeEmbed

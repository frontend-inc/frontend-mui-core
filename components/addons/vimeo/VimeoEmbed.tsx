'use client'

import React from 'react'
import { AspectRatio } from '../../../shadcn/ui/aspect-ratio'

type VimeoEmbedProps = {
	src: string
	aspectRatio?: number
}

const VimeoEmbed: React.FC<VimeoEmbedProps> = (props) => {
	const { src, aspectRatio = 16 / 9 } = props

	return (
		<AspectRatio ratio={aspectRatio}>
			<iframe
				src={src}
				width="800px"
				height="450px"
				className="w-full h-full absolute top-0 left-0"
				frameBorder="0"
			></iframe>
		</AspectRatio>
	)
}

export default VimeoEmbed

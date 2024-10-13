'use client'

import React from 'react'
import { SwirlShortVideos } from 'swirl-short-videos-typescript'

export type SwirlVideosProps = {
	dataCode: string
	dataPlaylistCode: string
	serverType?: 'development' | 'prod'
}

const SwirlVideos: React.FC<SwirlVideosProps> = (props) => {
	const { dataCode, dataPlaylistCode, serverType = 'prod' } = props

	return (
		<div className="min-h-[100px] w-full">
			<SwirlShortVideos
				dataCode={dataCode}
				dataPlalistCode={dataPlaylistCode}
				serverType={serverType}
			/>
		</div>
	)
}

export default SwirlVideos

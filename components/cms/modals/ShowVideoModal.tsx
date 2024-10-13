'use client'

import React from 'react'
import { MediaModal } from '../..'
import { useResourceContext } from 'frontend-js'

export type ShowVideoModalProps = {}

const ShowVideoModal: React.FC<ShowVideoModalProps> = (props) => {
	const { openShow, setOpenShow, resource, url } = useResourceContext()

	if (!resource) return null
	return (
		<MediaModal open={openShow} handleClose={() => setOpenShow(false)}>
			<div className="w-full min-w-[80vw]">
				<video
					src={resource?.video?.url}
					controls
					height={'100%'}
					width="100%"
				/>
			</div>
		</MediaModal>
	)
}

export default ShowVideoModal

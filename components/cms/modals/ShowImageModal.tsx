'use client'

import React from 'react'
import { Image, MediaModal } from '../..'
import { useResourceContext } from 'frontend-js'
import { cn } from '../../../shadcn/lib/utils'

export type ShowImageModalProps = {
	enableGradient?: boolean
}

const ShowImageModal: React.FC<ShowImageModalProps> = (props) => {
	const { openShow, setOpenShow, resource } = useResourceContext()

	const { enableGradient } = props || {}

	if (!resource) return null
	return (
		<MediaModal open={openShow} handleClose={() => setOpenShow(false)}>
			<div className={cn('w-full min-w-[80vw]')}>
				<Image
					alt={resource?.title}
					aspectRatio={16 / 9}
					src={resource?.image?.url}
					enableGradient={enableGradient}
				/>
			</div>
		</MediaModal>
	)
}

export default ShowImageModal

'use client'

import React from 'react'
import { CellImage } from '../../../components'
import { cloudinaryImageFromVideoUrl } from '../../../helpers'

type CellVideoProps = {
	value: {
		url: string
	}
	size?: number
	handleClick?: () => void
}

const CellVideo: React.FC<CellVideoProps> = (props) => {
	const { value, handleClick, size = 64 } = props
	return (
		<CellImage
			value={cloudinaryImageFromVideoUrl(value?.url)}
			handleClick={handleClick}
		/>
	)
}

export default CellVideo

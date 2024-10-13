'use client'

import React from 'react'
import Image from 'next/image'
import { NoImage } from '../../../components'

type LogoProps = {
	src?: string
	height: number
	width: number
	alt?: string
}

const Logo: React.FC<LogoProps> = (props) => {
	const { src = null, height = 50, width = 120, alt = 'Logo' } = props

	return src ? (
		<Image
			src={src}
			alt={alt}
			height={height}
			width={width}
			style={{
				minHeight: `${height}px`,
				objectFit: 'contain',
			}}
		/>
	) : (
		<NoImage height={height} />
	)
}

export default Logo

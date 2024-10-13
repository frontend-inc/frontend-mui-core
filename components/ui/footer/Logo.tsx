'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '../../../shadcn/ui/button'
import EmptyImage from '../NoImage'

const LOGO_WIDTH = 160
const LOGO_HEIGHT = 60

type LogoProps = {
	src: string
	width?: number
	height?: number
	handleClick: (path: string) => void
}

const Logo: React.FC<LogoProps> = ({
	src,
	width = LOGO_WIDTH,
	height = LOGO_HEIGHT,
	handleClick,
}) => {
	return (
		<Button
			variant="ghost"
			className="p-0 hover:bg-transparent focus:bg-transparent"
			onClick={() => handleClick('/')}
		>
			{src?.length > 1 ? (
				<Image
					src={src}
					alt="logo"
					width={width}
					height={height}
					className="object-contain"
					priority
				/>
			) : (
				<EmptyImage width={width} height={height} />
			)}
		</Button>
	)
}

export default Logo

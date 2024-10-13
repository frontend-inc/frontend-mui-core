import React from 'react'
import { Typography, Button } from '../../../tailwind'
import { Image } from '../..'
import { useRouter } from 'next/router'
import { useApp } from '../../../hooks'
import { cn } from '../../../shadcn/lib/utils'

export type CoverProps = {
	editing?: boolean
	title?: string | React.ReactNode
	description?: string
	buttonText?: string
	textVariant?: 'h1' | 'h2' | 'h3'
	image: string
	height?: number
	width?: number
	alignItems?: 'flex-start' | 'center' | 'flex-end'
	alt?: string
	handleClick?: () => void
	enableGradient?: boolean
	enableOverlay?: boolean
	opacity?: number
	path?: string
}

const Cover: React.FC<CoverProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useApp()

	const {
		title,
		description,
		textVariant = 'h3',
		handleClick,
		image,
		height = 400,
		alt = 'image',
		enableGradient = false,
		enableOverlay = false,
		opacity = 0.65,
		alignItems = 'center',
		buttonText,
		path,
	} = props

	const handleItemClick = () => {
		if (handleClick) {
			return handleClick()
		} else if (path) {
			router.push(`${clientUrl}${path}`)
		}
	}

	return (
		<div className={cn('dark relative w-full')}>
			<div className="hidden sm:block">
				<Image
					disableBorderRadius
					src={image}
					alt={alt}
					aspectRatio={2.5}
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
					opacity={opacity}
				/>
			</div>
			<div className="block sm:hidden">
				<Image
					disableBorderRadius
					src={image}
					alt={alt}
					aspectRatio={1.0}
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
					opacity={opacity}
				/>
			</div>
			<div
				className={cn(
					'flex flex-col items-center justify-center',
					height && `h-[${height}px]`,
					`absolute top-0 left-0 w-full h-full px-3 sm:px-0`
				)}
			>
				<div
					className={cn(
						'flex flex-col',
						alignItems === 'flex-start' && 'items-start',
						alignItems === 'center' && 'items-center',
						alignItems === 'flex-end' && 'items-end',
						'space-y-4'
					)}
				>
					{title && (
						<Typography
							variant={textVariant}
							textAlign={alignItems === 'center' ? 'center' : 'left'}
						>
							{title}
						</Typography>
					)}
					{description && (
						<Typography
							variant="subtitle2"
							color="text.primary"
							textAlign={alignItems === 'center' ? 'center' : 'left'}
						>
							{description}
						</Typography>
					)}
					{buttonText && (
						<div className="py-2">
							<Button
								size="large"
								onClick={handleItemClick}
								variant="contained"
							>
								{buttonText}
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Cover

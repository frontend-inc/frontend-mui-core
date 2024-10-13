'use client'

import React from 'react'
import { useApp } from '../../../hooks'
import { Button, Typography } from '../../../tailwind'
import { ExpandableText, Image } from '../..'
import { useRouter, useParams } from 'next/navigation'

export type FeaturedCardProps = {
	label?: string
	title?: string
	description?: string
	image?: string
	buttonText?: string
	href?: string
	flexDirection?: 'row' | 'row-reverse'
	handleClick?: () => void
	objectFit?: 'cover' | 'contain'
	enableOverlay?: boolean
	enableBorder?: boolean
	enableGradient?: boolean
}

const FeaturedCard: React.FC<FeaturedCardProps> = (props) => {
	const { clientUrl } = useApp()
	const {
		label,
		title,
		description,
		image = '',
		href,
		buttonText,
		flexDirection = 'row',
		handleClick,
		objectFit = 'cover',
		enableOverlay = false,
		enableBorder = false,
		enableGradient = false,
	} = props || {}

	const router = useRouter()

	const handleItemClick = () => {
		if (handleClick) {
			return handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	return (
		<div
			className={`flex items-center gap-4 ${
				flexDirection === 'row-reverse' ? 'flex-row-reverse' : 'flex-row'
			} flex-wrap md:flex-nowrap`}
		>
			<div className="w-full md:w-1/2">
				<Image
					label={label}
					src={image}
					height={320}
					objectFit={objectFit}
					alt={title}
					enableOverlay={enableOverlay}
					enableGradient={enableGradient}
					disableBorderRadius={enableBorder}
				/>
			</div>
			<div className="flex flex-col gap-4 w-full md:w-1/2">
				<Typography variant={'h6'}>{title}</Typography>
				{description && <ExpandableText text={description} />}
				{buttonText && (
					<div className="flex flex-row gap-4">
						<Button
							size="large"
							variant="contained"
							color="primary"
							onClick={handleItemClick}
						>
							{buttonText}
						</Button>
					</div>
				)}
			</div>
		</div>
	)
}

export default FeaturedCard

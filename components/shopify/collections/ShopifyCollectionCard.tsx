import React from 'react'
import { useRouter } from 'next/router'
import { Typography } from '../../../tailwind'
import { Card } from '../../../shadcn/ui/card'
import { Button } from '../../../shadcn/ui/button'
import { useApp } from '../../../hooks'
import { truncate } from '../../../helpers'
import { Image } from '../../../components'

export type ShopifyCardProps = {
	collection?: {
		label?: string
		title?: string
		image?: {
			url: string
		}
	}
	href?: string
	buttonText?: string
	handleClick?: () => void
	enableGradient?: boolean
	enableOverlay?: boolean
}

export default function ShopifyCollectionCard({
	collection,
	href,
	handleClick,
	buttonText,
	enableGradient = false,
	enableOverlay = false,
}: ShopifyCardProps) {
	const { clientUrl } = useApp()
	const router = useRouter()

	const { label, title, image } = collection || {}

	const handleItemClick = () => {
		if (handleClick) {
			handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	return (
		<Card className="relative w-full rounded-lg">
			<div className="relative w-full h-full">
				<Image
          // @ts-ignore
					src={image?.url}
					alt={title || 'Collection image'}					
					label={label}
					aspectRatio={1.0}
					objectFit="cover"
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
				/>
			</div>
			<div className="dark absolute bottom-0 left-0 w-full p-4 z-10">
				<div className="flex items-center justify-between w-full">
					<div className="flex flex-col items-start justify-center">
						<Typography variant="body1" className="font-bold">
							{truncate(title || '', 60)}
						</Typography>
					</div>
					{buttonText && (
						<Button
							variant="secondary"
							size="sm"
							onClick={handleItemClick}
							className="bg-white text-black hover:bg-white/90"
						>
							Browse
						</Button>
					)}
				</div>
			</div>
		</Card>
	)
}

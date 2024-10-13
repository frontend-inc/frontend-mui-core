import React from 'react'
import { cn } from '../../../shadcn/lib/utils'
import { Image, TouchableOpacity } from '../..'
import { Typography } from '../../../tailwind'

type CoverCardProps = {
  label?: string
  primary?: string
  secondary?: string
  actions?: React.ReactNode
  secondaryAction?: React.ReactNode
  handleClick: () => void
  image: string
  height?: number
  slots?: {
    item?: any
    image?: any
  }
}

const CoverCard: React.FC<CoverCardProps> = (props) => {
	const {
		label,
		primary,
		secondary,
		actions,
		secondaryAction,
		handleClick,
		image,
		height = 340,
		slots = {
			item: {},
			image: {},
		},
	} = props || {}

	return (
		<div className="dark">
			<div
				className={cn('relative flex flex-col overflow-hidden w-full rounded')}
			>
				<TouchableOpacity handleClick={handleClick}>
					<Image
						label={label}
						src={image}
						height={height}
						alt={primary}
						aspectRatio={4 / 5}
						className={cn('w-full', slots.image.className)}
						{...slots.image}
					/>
				</TouchableOpacity>
				<div className="absolute bottom-0 left-0 z-10 w-full p-3">
					<div className="flex flex-col justify-between items-end w-full">
						<div className="w-full">
							<Typography variant="subtitle1">{primary}</Typography>
							<Typography variant="body2">{secondary}</Typography>
							<div className="flex flex-row justify-between">
								{actions}
								{secondaryAction}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CoverCard

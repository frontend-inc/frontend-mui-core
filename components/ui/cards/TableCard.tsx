'use client'

import React from 'react'
import { Image } from '../..'
import { Typography } from '../../../tailwind'
import { cn } from '../../../shadcn/lib/utils'

export type CardProps = {
	label?: string
	primary: string
	secondary?: React.ReactNode
	secondaryAction?: React.ReactNode
	handleClick?: () => void
	image?: string
	height?: number
	slots?: {
		item?: React.HTMLAttributes<HTMLDivElement>
		image?: React.ComponentProps<typeof Image>
	}
}

const TableCard: React.FC<CardProps> = (props) => {
	const {
		label,
		primary,
		secondary,
		secondaryAction,
		handleClick,
		image,
		height = 240,
		slots = {
			item: {},
			image: {},
		},
	} = props || {}

	return (
		<div
			className={cn(
				'w-full flex flex-row flex-nowrap pt-1 pb-2 overflow-hidden border-b border-border justify-between'
			)}
			{...slots.item}
		>
			<div className="w-full sm:grid sm:grid-cols-[repeat(auto-fill,140px)] gap-3 flex flex-col">
				<div className="flex flex-row justify-center items-center w-full h-full">
					<div className="w-[100px] max-w-[100px] h-full">
						<button
							className="w-full h-full focus:outline-none"
							onClick={handleClick}
						>
							<Image
								src={image}
								height={height}
								alt={primary}
								className="w-full h-full object-cover"
								{...slots.image}
							/>
						</button>
					</div>
				</div>
				<div className="flex flex-row justify-start items-center max-w-[140px] min-w-[140px]">
					<Typography variant="body1">{primary}</Typography>
				</div>
				{secondary}
			</div>
			<div className="flex flex-row justify-end">{secondaryAction}</div>
		</div>
	)
}

export default TableCard

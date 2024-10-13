'use client'

import React from 'react'
import Link from 'next/link'
import { Checkbox } from '../../../shadcn/ui/checkbox'
import { Icon, Image, AvatarImage } from '../..'
import { CardProps } from './Card'
import { Typography } from '../../../tailwind'

export type ListCardProps = CardProps & {
	circular?: boolean
	disableImage?: boolean
}

const ListCard: React.FC<ListCardProps> = (props) => {
	const {
		circular = false,
		sortable = false,
		selectable = false,
		selected = false,
		label,
		primary,
		secondary,
		actions,
		secondaryAction,
		handleClick,
		handleSelect,
		image,
		size = 140,
		disableImage,
		slots = {
			item: {},
			image: {},
		},
	} = props || {}

	return (
		<div className="p-4 border-b border-border last:border-b-0 hover:bg-gray-50 transition-colors duration-200">
			<div className="flex flex-row items-center w-full">
				{selectable && (
					<div className="mr-2">
						<Checkbox checked={selected} onCheckedChange={handleSelect} />
					</div>
				)}
				{sortable && (
					<Icon name="GripVertical" className="text-muted-foreground" />
				)}
				<div className="flex flex-row justify-start items-start space-x-4 flex-grow">
					{!disableImage && (
						<div className="flex-shrink-0 w-[180px]">
							<div className="w-full pr-2 h-full flex justify-center sm:justify-start items-center">
								{circular ? (
									<AvatarImage
										label={label}
										src={image}
										height={size}
										alt={primary}
										onClick={handleClick}
										{...slots.image}
									/>
								) : (
									<Image
										label={label}
										src={image}
										height={size}
										alt={primary}
										aspectRatio={1.0}
										onClick={handleClick}
										{...slots.image}
									/>
								)}
							</div>
						</div>
					)}
					<div className="flex flex-col justify-between h-[140px] flex-grow">
						<div className="flex flex-col space-y-1">
							<Link
								href="#"
								onClick={handleClick}
								className="text-foreground no-underline"
							>
								<Typography variant="subtitle1">{primary}</Typography>
							</Link>
							<Typography variant="body2" className="text-muted-foreground">
								{secondary}
							</Typography>
						</div>
						<div className="flex flex-row justify-between items-center w-full">
							{actions}
							{secondaryAction}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ListCard

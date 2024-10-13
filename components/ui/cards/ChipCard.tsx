import React from 'react'
import { Button } from '../../../shadcn/ui/button'
import { AvatarImage } from '../..'

export interface CardProps {
	primary: string
	secondary?: string
	secondaryAction?: React.ReactNode
	handleClick?: () => void
	image: string
}

const ChipCard: React.FC<CardProps> = (props) => {
	const { primary, secondary, secondaryAction, handleClick, image } = props

	return (
		<ul className="my-0 p-0 border-b border-divider">
			<li className="p-0">
				<Button
					variant="ghost"
					className="w-full justify-start p-1 min-h-[48px] hover:bg-transparent"
					onClick={handleClick}
				>
					<div className="mr-2 h-12 w-12">
						<AvatarImage image={image} alt={primary} />
					</div>
					<div className="flex flex-col items-start">
						<span className="text-sm font-medium">{primary}</span>
						{secondary && (
							<span className="text-xs text-muted-foreground">{secondary}</span>
						)}
					</div>
				</Button>
				{secondaryAction && (
					<div className="absolute right-2 top-1/2 transform -translate-y-1/2">
						{secondaryAction}
					</div>
				)}
			</li>
		</ul>
	)
}

export default ChipCard

'use client'

import React from 'react'
import { Typography } from '../../../../tailwind'
import { PublishLabel } from '../../../../components'
import { Image } from '../../../../components'
import { truncate } from '../../../../helpers'
import { cn } from '../../../../shadcn/lib/utils'

type DocumentListItemProps = {
	document?: any
	handleClick?: () => void
	selected?: boolean
}

const DocumentListItem: React.FC<DocumentListItemProps> = (props) => {
	const { document, handleClick, selected = false } = props

	return (
		<li
			className={cn(
				'bg-background rounded border-2 border-border mb-1 overflow-hidden transition-colors duration-200 ease-in-out',
				selected && 'border-primary'
			)}
		>
			<div
				className="flex items-center p-0 cursor-pointer"
				onClick={handleClick}
			>
				<div className="w-[72px] mr-2">
					<Image
						src={document?.image?.url}
						alt={document?.title}
						height={72}
						disableBorderRadius
					/>
				</div>
				<div className="flex-grow">
					<Typography
						variant="body2"
						
						className="max-w-[146px]"
					>
						{truncate(document?.title)}
					</Typography>
				</div>
				<div className="ml-auto">
					<PublishLabel published={document?.published} />
				</div>
			</div>
		</li>
	)
}

export default DocumentListItem

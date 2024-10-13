'use client'

import React, { useEffect, useState } from 'react'
import {
	TouchableOpacity,
	Image,
	AttachmentImage,
	Label,
} from '../../../components'
import { Button } from '../../../shadcn/ui/button'
import { Card, CardHeader } from '../../../shadcn/ui/card'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../../../shadcn/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'
import { cn } from '../../../shadcn/lib/utils'

type MediaItemProps = {
	item?: any
	selected?: boolean
	handleClick?: (item: any) => void
	handleRemove?: () => void
}

const MediaItem: React.FC<MediaItemProps> = ({
	item,
	selected,
	handleClick,
	handleRemove,
}) => {
	const [contentType, setContentType] = useState('')

	useEffect(() => {
		setContentType(item?.content_type?.split('/')[0])
	}, [item])

	return (
		<Card
			className={cn(
				'rounded-md bg-background p-0 min-w-[120px] h-[208px] border border-transparent',
				selected && 'border-primary'
			)}
		>
			<CardHeader className="py-1 px-1 flex flex-row justify-between items-center">
				<Label variant="outline" label={item?.content_type?.split('/')[1]} />
				{handleRemove && (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" className="h-8 w-8 p-0">
								<MoreHorizontal className="h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem onClick={handleRemove}>Remove</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				)}
			</CardHeader>
			{contentType === 'image' || contentType === 'video' ? (
				<TouchableOpacity handleClick={() => handleClick && handleClick(item)}>
					<div className="h-[160px] w-[180px] flex items-center justify-center overflow-hidden">
						<Image
							disableBorderRadius
							aspectRatio={4 / 3}
							src={item?.url}
							alt={item?.content_type}
						/>
					</div>
				</TouchableOpacity>
			) : (
				<AttachmentImage icon="File" width={64} height={64} />
			)}
		</Card>
	)
}

export default MediaItem

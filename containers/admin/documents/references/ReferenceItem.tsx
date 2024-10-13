import React from 'react'
import { Image, Icon, Label, MenuButton } from '../../../../components'
import { PublishLabel } from '../../../../components'
import { truncate } from '../../../../helpers'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../../../../shadcn/ui/dropdown-menu'
import { cn } from '../../../../shadcn/lib/utils'

type SortableReferenceItemProps = {
	item: any
	handleEditItem: (item: any) => void
	handleRemoveItem: (item: any) => void
}

const SortableReferenceItem: React.FC<SortableReferenceItemProps> = ({
	item,
	handleEditItem,
	handleRemoveItem,
}) => {
	const { target } = item || {}

	return (
		<div
			className={cn(
				'flex flex-row bg-background border-2 border-border rounded-md p-0 mb-1 w-full',
				item.isDragging && 'bg-background-hover'
			)}
		>
			<div className="flex items-center justify-center w-8 bg-muted rounded-l-md">
				<Icon name="GripVertical" className="text-primary" />
			</div>
			<div className="w-18">
				<Image
					src={target?.image?.url}
					alt={target?.title}
					height={72}
					disableBorderRadius
				/>
			</div>
			<div className="flex-grow">
				<div className="flex justify-between items-center px-2">
					<div className="flex-grow">
						<Label label={target?.content_type} />
					</div>
					<div className="flex items-center">
						<PublishLabel published={target?.published} />
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<MenuButton />
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem onClick={() => handleEditItem(target)}>
									Edit
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => handleRemoveItem(item)}>
									Remove
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
				<div className="px-2 pb-1">
					<p className="text-sm font-medium text-foreground">
						{truncate(target?.title)}
					</p>
				</div>
			</div>
		</div>
	)
}

export default SortableReferenceItem

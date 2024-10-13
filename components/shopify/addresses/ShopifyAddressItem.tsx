'use client'

import React from 'react'
import { Typography } from '../../../tailwind'
import { Button } from '../../../shadcn/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../../../shadcn/ui/dropdown-menu'
import { MenuButton } from '../../../components'
import { ShopifyAddressType } from 'frontend-shopify'

type ShopifyAddressItemProps = {
	address: ShopifyAddressType
	handleClick: (id: string) => void
	handleEdit: (id: string) => void
	handleDelete: (address: ShopifyAddressType) => void
	disableActions?: boolean
}

const ShopifyAddressItem: React.FC<ShopifyAddressItemProps> = (props) => {
	const {
		address,
		handleClick,
		handleEdit,
		handleDelete,
		disableActions = false,
	} = props

	return (
		<div className="flex justify-between items-center w-full p-2">
			<Button
				variant="ghost"
				className="flex-grow text-left justify-start rounded-lg"
        //@ts-ignore 
				onClick={() => handleClick(address?.id)}
			>
				<div>
					<Typography variant="subtitle1">
						{address?.firstName} {address?.lastName}
					</Typography>
					<Typography variant="body2" color="textSecondary">
						{address.address1}
					</Typography>
					{address.address2 && (
						<Typography variant="body2" color="textSecondary">
							{address.address2}
						</Typography>
					)}
					<Typography variant="body2" color="textSecondary">
						{address?.city}, {address?.province} {address?.zip}
					</Typography>
				</div>
			</Button>
			{!disableActions && (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<MenuButton />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
            {/* @ts-ignore */}
						<DropdownMenuItem onSelect={() => handleEdit(address?.id)}>
							Edit
						</DropdownMenuItem>
						<DropdownMenuItem onSelect={() => handleDelete(address)}>
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)}
		</div>
	)
}

export default ShopifyAddressItem

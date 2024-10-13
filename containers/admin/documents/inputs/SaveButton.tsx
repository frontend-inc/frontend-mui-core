'use client'

import React from 'react'
import { Button } from '../../../../shadcn/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../../../../shadcn/ui/dropdown-menu'
import { ChevronDown, Loader2 } from 'lucide-react'
import { cn } from '../../../../shadcn/lib/utils'
import { useRouter } from 'next/router'
import { useAdmin } from '../../../../hooks'

type SaveButtonProps = {
	loading: boolean
	document: any
	handleSubmit: () => void
	fullWidth?: boolean
}

const SaveButton: React.FC<SaveButtonProps> = ({
	loading,
	document,
	handleSubmit,
	fullWidth = false,
}) => {
	const { clientUrl } = useAdmin()
	const router = useRouter()
	const { app_id: appId, collection_id: collectionId } = router?.query

	const handleSave = () => {
		handleSubmit()
		router.push(`${clientUrl}/collections/${collectionId}`)
	}

	const handleSaveAndNew = () => {
		handleSubmit()
		router.push(`${clientUrl}/collections/${collectionId}/documents/new`)
	}

	return (
		<div className={cn('flex', fullWidth ? 'w-full' : 'w-auto sm:w-auto')}>
			<Button
				variant="default"
				className={cn(
					'w-full h-9 rounded-r-none bg-blue-500 hover:bg-blue-600 text-white',
					loading && 'opacity-70 cursor-not-allowed'
				)}
				onClick={handleSubmit}
				disabled={loading}
			>
				<span className="mr-2">{document?.id ? 'Save' : 'Create'}</span>
				{loading && <Loader2 className="w-4 h-4 animate-spin" />}
			</Button>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="default"
						size="sm"
						className="h-9 px-2 rounded-l-none bg-blue-500 hover:bg-blue-600 text-white"
					>
						<ChevronDown className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem onClick={handleSave}>
						Save and close
					</DropdownMenuItem>
					<DropdownMenuItem onClick={handleSaveAndNew}>
						Save and create new
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

export default SaveButton

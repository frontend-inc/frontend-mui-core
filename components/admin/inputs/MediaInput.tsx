import React, { useState } from 'react'
import { Button } from '../../../shadcn/ui/button'
import { Image, InputLabel } from '../../../components'
import MediaBrowser from './MediaBrowser'
import { Search, X } from 'lucide-react'
import { ImageType } from '../../../types'
import { cn } from '../../../shadcn/lib/utils'

type MediaInputProps = {
	name: string
	label?: string
	value: ImageType
	objectFit?: 'cover' | 'contain'
	handleAddAttachment: (field: string, id: number) => void
	handleRemoveAttachment: (field: string) => void
}

const MediaInput: React.FC<MediaInputProps> = ({
	name,
	label = 'Media',
	value,
	objectFit = 'cover',
	handleAddAttachment,
	handleRemoveAttachment,
}) => {
	const [open, setOpen] = useState(false)
	const [openEdit, setOpenEdit] = useState(false)

	const handleSubmit = async (resources: any[]) => {
		const resourceIds = resources.map((res) => res?.id)
		await handleAddAttachment(name, resourceIds[0])
		setOpen(false)
	}

	const handleRemove = async () => {
		await handleRemoveAttachment(name)
		setOpen(false)
	}

	const handleAddClick = () => {
		setOpenEdit(true)
	}

	return (
		<div>
			<div className="flex flex-col space-y-2">
				<InputLabel label={label} />
				<div className="w-[140px] h-[140px]">
					<Image
						alt={label}
						src={value?.url}
						aspectRatio={1.0}
						objectFit={objectFit}
					/>
				</div>
				<div className="flex flex-row">
					<Button
						variant="secondary"
						onClick={handleAddClick}
						className={cn('flex items-center rounded-lg rounded-r-none')}
					>
						<Search className="mr-2 h-4 w-4" />
						Browse
					</Button>
					<Button
						variant="secondary"
						onClick={handleRemove}
						className="px-2 rounded-lg rounded-l-none"
					>
						<X className="w-5 h-5 text-secondary-foreground" />
					</Button>
				</div>
			</div>
			<MediaBrowser
				open={openEdit}
				handleClose={() => setOpenEdit(false)}
				handleSubmit={handleSubmit}
			/>
		</div>
	)
}

export default MediaInput

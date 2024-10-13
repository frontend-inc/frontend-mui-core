import React, { useState } from 'react'
import { useResource, useResourceContext } from 'frontend-js'
import { Button } from '../../../shadcn/ui/button'
import { Modal } from '../../../components'
import { Plus } from 'lucide-react'
import { RemoteAutosuggest } from '../../../components'
import { useAuth } from 'frontend-js'
import { useApp } from '../../../hooks'
import { cn } from '../../../shadcn/lib/utils'

type AddToListProps = {
	size?: 'small' | 'large'
	resource: any
	color?: string
	className?: string
}

const AddToList: React.FC<AddToListProps> = (props) => {
	const {
		size = 'small',
		resource: selected,
		color = 'text-secondary',
		className,
	} = props

	const { currentUser } = useAuth()
	const { setAuthOpen } = useApp()

	const [open, setOpen] = useState(false)
	const handleClose = () => setOpen(false)

	const { foreignUrl } = useResourceContext()

	const { loading, resource, handleChange, addReferences } = useResource({
		name: 'document',
		url: foreignUrl,
	})

	const handleClick = () => {
		if (!currentUser?.id) return setAuthOpen(true)
		setOpen(true)
	}

	const handleSubmit = async () => {
		if (!currentUser?.id) return setAuthOpen(true)
		if (resource?.id) {
			await addReferences(resource?.id, [selected?.id])
			setOpen(false)
		}
	}

	return (
		<>
			<Button
				variant="ghost"				
				onClick={handleClick}
				className={cn(
					'p-2',
					size === 'large' &&
						'border border-border bg-background hover:bg-background',
					color,
					className
				)}
			>
				<Plus className="h-4 w-4" />
			</Button>
			<Modal
				title="Add to List"
				loading={loading}
				open={open}
				handleClose={handleClose}
				buttons={
					<Button className="w-full" onClick={handleSubmit} variant="default">
						<Plus className="mr-2 h-5 w-5 text-foreground" />
						Add to List
					</Button>
				}
			>
				<RemoteAutosuggest
					url={foreignUrl}
					name="id"
					displayField="title"
					value={resource?.id}
          //@ts-ignore
					handleChange={handleChange}
					defaultQuery={{
						current_user: true,
					}}
				/>
			</Modal>
		</>
	)
}

export default AddToList

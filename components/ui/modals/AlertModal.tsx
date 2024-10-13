import React from 'react'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '../../../shadcn/ui/alert-dialog'
import { Button } from '../../../shadcn/ui/button'
import { IconLoading } from '../../../components'
import { cn } from '../../../shadcn/lib/utils'

type AlertModalProps = {
	loading?: boolean
	title?: string
	description?: string
	icon?: string
	open: boolean
	handleClose: () => void
	handleConfirm: () => void
}

const AlertModal: React.FC<AlertModalProps> = ({
	loading = false,
	title = 'Please confirm or cancel this action.',
	description = 'This action is not reversable.',
	open,
	handleClose,
	handleConfirm,
}) => {
	return (
		<AlertDialog open={open} onOpenChange={handleClose}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>{description}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel asChild>
						<Button variant="secondary" onClick={handleClose}>
							Cancel
						</Button>
					</AlertDialogCancel>
					<AlertDialogAction asChild>
						<Button
							variant="default"
							onClick={handleConfirm}
							className={cn(loading && 'cursor-not-allowed opacity-50')}
							disabled={loading}
						>
							{loading && <IconLoading />}
							Confirm
						</Button>
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export default AlertModal

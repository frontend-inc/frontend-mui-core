import React, { useState } from 'react'
import { AlertModal } from '../../../../components'
import { IconButton } from '../../../../tailwind'
import { Sparkle } from 'lucide-react'

type AiButtonProps = {
	loading?: boolean
	icon?: string
	title?: string
	description?: string
	handleClick: () => void
}

const AiButton: React.FC<AiButtonProps> = ({
	loading = false,
	icon = 'Wand',
	title = 'Do you want to use AI?',
	description = 'This action may take a while to complete.',
	handleClick,
}) => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<IconButton onClick={() => setOpen(true)}>
				<Sparkle className="w-5 h-5" />
			</IconButton>
			<AlertModal
				loading={loading}
				open={open}
				handleClose={() => setOpen(false)}
				icon={icon}
				title={title}
				description={description}
				handleConfirm={handleClick}
			/>
		</>
	)
}

export default AiButton

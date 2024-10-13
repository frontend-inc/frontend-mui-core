'use client'

import React from 'react'
import { useResourceContext } from 'frontend-js'
import { MessageCircle } from 'lucide-react'
import { IconButton } from '../../../tailwind'
import { cn } from '../../../shadcn/lib/utils'

type CommentButtonProps = {
	resource: any
	size?: 'small' | 'large'
}

export default function CommentButton({
	resource,
	size = 'small',
}: CommentButtonProps) {
	const { openShow, setOpenShow, setResource } = useResourceContext()

	const handleClick = () => {
		setResource(resource)
		setOpenShow(!openShow)
	}

	return (
		<div>
			<IconButton
				onClick={handleClick}
				className={cn(size === 'large' && 'border border-divider')}
			>
				<MessageCircle className="text-foreground w-4 h-4" />
			</IconButton>
		</div>
	)
}

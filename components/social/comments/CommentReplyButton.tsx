'use client'

import React from 'react'
import { Button } from '../../../shadcn/ui/button'

type CommentReplyButtonProps = {
	reply?: boolean
	handleClick: () => void
}

const CommentReplyButton: React.FC<CommentReplyButtonProps> = (props) => {
	const { reply, handleClick } = props

	return (
		<Button
			variant="secondary"
			onClick={handleClick}
			className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
		>
			{reply ? 'Reply' : 'Leave a Comment'}
		</Button>
	)
}

export default CommentReplyButton

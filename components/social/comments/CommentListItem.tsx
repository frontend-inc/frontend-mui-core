'use client'

import React, { useEffect, useState } from 'react'
import { Collapse, Typography } from '../../../tailwind'
import { Button } from '../../../shadcn/ui/button'
import { UserAvatar } from '../../../components'
import { useComments } from '../../../hooks'
import moment from 'moment'
import CommentForm from './CommentForm'

type CommentListItemProps = {
	url: string
	handle: string
	comment: any
	reply?: boolean
	user?: any
	level?: number
	enableReply?: boolean
	handleDelete?: (comment: any) => void
}

const CommentListItem: React.FC<CommentListItemProps> = (props) => {
	const {
		url,
		handle,
		reply = false,
		level = 0,
		comment: parentComment,
		handleDelete,
	} = props

	const [openComment, setOpenComment] = useState(false)
	const [showReplies, setShowReplies] = useState(false)

	const handleShowReplies = () => {
		setShowReplies(!showReplies)
	}

	const {
		loading,
		delayedLoading,
		errors,
		comment,
		setComment,
		handleChange,
		createComment,
	} = useComments({
		url,
		handle,
	})

	const handleReply = () => {
		setOpenComment(!openComment)
	}

	const handleSubmit = async () => {
		const newComment = await createComment(comment)
		if (newComment?.id) {
			parentComment.replies.push(newComment)
			setShowReplies(true)
			setOpenComment(false)
		}
	}

	useEffect(() => {
		setComment({
			parent_id: parentComment?.id,
		})
	}, [parentComment])

	return (
		<div className="py-2">
			<div className="flex items-start space-x-4">
				<div className="mt-1">
					<UserAvatar user={parentComment?.user} />
				</div>
				<div className="flex-grow">
					<div className="space-y-1">
						<Typography variant="body2" className="text-muted-foreground">
							{`@${parentComment?.user?.username}`} -{' '}
							{moment(parentComment?.created_at).fromNow()}
						</Typography>
						<Typography
							variant="body1"
							
							className="mb-2 whitespace-pre-wrap"
						>
							{parentComment?.body}
						</Typography>
					</div>
					<Button
						variant="link"
						onClick={handleReply}
						className="text-muted-foreground hover:text-foreground"
					>
						reply
					</Button>
				</div>
			</div>
			<Collapse in={openComment}>
				<CommentForm
					loading={delayedLoading}
					errors={errors}
					comment={comment}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			</Collapse>
			{parentComment?.replies?.length > 0 && (
				<>
					{!showReplies && (
						<div>
							<Button
								variant="link"
								className="text-muted-foreground hover:text-foreground"
								onClick={handleShowReplies}
							>
								show {parentComment?.replies?.length}{' '}
								{parentComment?.replies?.length > 1 ? 'replies' : 'reply'}
							</Button>
						</div>
					)}
				</>
			)}
			<div className={`border-b border-divider ${reply ? 'ml-14' : ''}`} />
			<Collapse in={showReplies}>
				{parentComment?.replies?.map((reply) => (
					<CommentListItem
						key={reply.id}
						reply
						url={url}
						handle={handle}
						comment={reply}
						level={level + 1}
						handleDelete={handleDelete}
					/>
				))}
			</Collapse>
		</div>
	)
}

export default CommentListItem

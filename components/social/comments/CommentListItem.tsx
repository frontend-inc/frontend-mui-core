import React, { useEffect, useState } from 'react'
import {
	Box,
	Link,
	Stack,
	IconButton,
	Collapse,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material'
import { UserAvatar } from '../../../components'
import { useComments } from '../../../hooks'
import { Icon } from '../../../components'
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
		<Box sx={sx.root}>
			<ListItem
				sx={{
					...sx.listItem,
				}}
			>
				<ListItemIcon sx={sx.listItemIcon}>
					<UserAvatar user={parentComment?.user} />
				</ListItemIcon>
				<ListItemText
					primary={
						<Stack spacing={0.5}>
							<Typography variant="body2" color="text.secondary">
								{`@${parentComment?.user?.username}`} -{' '}
								{moment(parentComment?.created_at).fromNow()}
							</Typography>
							<Typography
								variant="body1"
								color="text.primary"
								sx={sx.commentText}
							>
								{parentComment?.body}
							</Typography>
						</Stack>
					}
					secondary={
						<Link onClick={handleReply} sx={sx.link}>
							reply
						</Link>
					}
				/>
			</ListItem>
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
						<Box>
							<Link variant="body1" sx={sx.link} onClick={handleShowReplies}>
								show {parentComment?.replies?.length}{' '}
								{parentComment?.replies?.length > 1 ? 'replies' : 'reply'}
							</Link>
						</Box>
					)}
				</>
			)}
			<Box
				sx={{
					...sx.divider,
					ml: reply ? 7 : 0,
				}}
			/>
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
		</Box>
	)
}

export default CommentListItem

const sx = {
	root: {
		py: 1,
	},
	showRepliesButton: {
		pl: 7,
	},
	listItem: {
		alignItems: 'flex-start',
		'&:hover .MuiBox-root': {
			display: 'block',
		},
	},
	listItemIcon: {
		mt: 1,
		mr: 2,
	},
	commentText: {
		mb: 1,
		color: 'text.primary',
		whiteSpace: 'pre-wrap',
		'& span': {
			fontWeight: 500,
		},
	},
	content: {
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	link: {
		cursor: 'pointer',
		color: 'text.secondary',
		'&:hover': {
			color: 'text.primary',
		},
	},
	showReplyButton: {
		color: 'text.secondary',
	},
	divider: {
		borderBottom: '1px solid',
		borderColor: 'divider',
	},
	replyIcon: {
		transform: 'rotate(180deg)',
	},
}

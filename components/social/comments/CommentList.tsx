import React, { useState, useContext, useEffect } from 'react'
import {
	AlertModal,
	CommentListItem,
	CommentForm,
	LoadMore,
	AuthGuard,
} from '../..'
import { List, Stack, Collapse, Typography } from '@mui/material'
import { useComments } from '../../../hooks'
import { useAuth } from 'frontend-js'

export type CommentListProps = {
	handle: string
	url: string
}

const CommentList: React.FC<CommentListProps> = (props) => {
	const { url, handle } = props
	const { currentUser } = useAuth()

	const [activeComment, setActiveComment] = useState(null)

	const [openComment, setOpenComment] = useState(false)
	const [openDelete, setOpenDelete] = useState(false)
	const [reply, setReply] = useState(false)

	const {
		loading,
		errors,
		query,
		comment,
		comments,
		setComment,
		findComments,
		handleChange,
		createComment,
		deleteComment,
		totalCount,
		page,
		numPages,
		loadMore,
	} = useComments({
		url,
		handle,
	})

	const handleSubmit = async () => {
		await createComment(comment)
		setOpenComment(false)
		findComments({
			...query,
			page: 1,
		})
		setReply(false)
	}

	const handleDeleteComment = (comment) => {
		setActiveComment(comment)
		setOpenDelete(true)
	}

	const handleDelete = async () => {
		await deleteComment(activeComment?.id)
		setOpenDelete(false)
		findComments({
			...query,
			page: 1,
		})
	}

	useEffect(() => {
		if (url && handle) {
			findComments({
				per_page: 5,
			})
		}
	}, [url, handle])

	return (
		<Stack spacing={1} sx={sx.root}>
			<Stack direction="column" spacing={1} sx={sx.commentHeader}>
				<Typography color="text.primary" variant="subtitle1">
					Comments ({totalCount})
				</Typography>
			</Stack>
			<AuthGuard requireAuth>
				<Collapse in>
					<CommentForm
						errors={errors}
						loading={loading}
						comment={comment}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
					/>
				</Collapse>
			</AuthGuard>
			<List disablePadding>
				{comments?.map((comment, i) => (
					<CommentListItem
						key={i}
						url={url}
						handle={handle}
						comment={comment}
						handleDelete={handleDeleteComment}
					/>
				))}
			</List>
			<LoadMore handlePaginate={loadMore} page={page} numPages={numPages} />
			<AlertModal
				loading={loading}
				open={openDelete}
				handleClose={() => setOpenDelete(false)}
				handleConfirm={handleDelete}
			/>
		</Stack>
	)
}

export default CommentList

const sx = {
	root: {
		borderColor: 'divider',
	},
	commentHeader: {
		width: '100%',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
	},
}

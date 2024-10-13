'use client'

import React from 'react'
import { UserAvatar, Label, ResourceListItem } from '../../../components'
import { truncate } from '../../../helpers'

type AdminCommentItemProps = {
	resource: any
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminCommentItem: React.FC<AdminCommentItemProps> = (props) => {
	const { resource: comment, handleClick, handleEdit, handleDelete } = props

	const getCommentUserName = (comment) => {
		return comment?.user?.first_name + ' ' + comment?.user?.last_name
	}

	return (
		<ResourceListItem
			primary={getCommentUserName(comment)}
			secondary={truncate(comment?.body, 40)}
			avatar={<UserAvatar user={comment?.user} />}
			secondaryAction={comment?.flagged && <Label label="Flagged" />}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminCommentItem

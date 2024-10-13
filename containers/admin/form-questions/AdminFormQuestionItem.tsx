'use client'

import React from 'react'
import { ResourceListItem } from '../../../components'
import { QuestionIcon } from '../../../containers'
import { ResourceItemProps } from '../../../components/cms/resources/ResourceItem'

const AdminFormQuestionItem: React.FC<ResourceItemProps> = (props) => {
	const {
		resource,
		selectable,
		selected,
		handleClick,
		handleEdit,
		handleDelete,
		handleSelect,
		...rest
	} = props

	const question = resource?.question

	return (
		<ResourceListItem
			selectable={selectable}
			selected={selected}
			image={question?.image?.url}
			primary={question?.title}
			avatar={<QuestionIcon variant={question?.variant} />}
			handleDelete={handleDelete}
			handleClick={handleClick}
			handleSelect={handleSelect}
			{...rest}
		/>
	)
}

export default AdminFormQuestionItem

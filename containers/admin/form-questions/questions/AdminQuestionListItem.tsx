'use client'

import React from 'react'
import { ResourceListItem } from '../../../../components'
import { ResourceItemProps } from '../../../../components/cms/resources/ResourceItem'
import { QuestionIcon } from '../../../../containers'

const AdminQuestionItem: React.FC<ResourceItemProps> = (props) => {
	const {
		resource: question,
		selectable,
		selected,
		handleClick,
		handleEdit,
		handleDelete,
		handleSelect,
		...rest
	} = props

	return (
		<ResourceListItem
			selectable={selectable}
			selected={selected}
			avatar={<QuestionIcon variant={question?.variant} />}
			primary={question?.title}
			handleClick={handleClick}
			handleDelete={handleDelete}
			handleSelect={handleSelect}
			{...rest}
		/>
	)
}

export default AdminQuestionItem

'use client'

import React from 'react'
import AdminQuestionListItems from './questions/AdminQuestionListItems'
import { Drawer } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

type AdminFormQuestionsAddProps = ResourceFormProps & {
	url: string
	formId: string
}

const AdminFormQuestionsAdd: React.FC<AdminFormQuestionsAddProps> = (props) => {
	const { open, handleClose, handleReload, url, formId } = props || {}

	return (
		<Drawer
			mode="editor"
			open={open}
			handleClose={handleClose}
			title="Add Questions"
		>
			<AdminQuestionListItems
				name={'form_question'}
				url={url}
				formId={formId}
				handleSuccess={handleReload}
			/>
		</Drawer>
	)
}

export default AdminFormQuestionsAdd

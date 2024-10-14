'use client'

import React from 'react'
import { Typography } from '../../../tailwind'
import PublishButton from './inputs/PublishButton'
import SaveButton from './inputs/SaveButton'
import { SyntheticEventType } from 'frontend-js'
import { UserAutosuggest } from '../../../components'
import { Separator } from '../../../shadcn/ui/separator'

type AdminDocumentRightPanelProps = {
	appId: string | number
	loading: boolean
	publishLoading: boolean
	errors?: any
	title: string | null
	document?: any
	setDocument: (document: any) => void
	handleChange: (e: SyntheticEventType) => void
	handleSubmit: () => void
	handleTogglePublish: () => void
	enableUsers?: boolean
	enableStripe?: boolean
	enablePlaces?: boolean
}

const AdminDocumentRightPanel: React.FC<AdminDocumentRightPanelProps> = (
	props
) => {
	const {
		loading,
		publishLoading,
		errors,
		document,
		handleChange,
		handleSubmit,
		handleTogglePublish,
	} = props

	return (
		<div className="bg-background h-full p-3 flex flex-col space-y-6">
			<div className="flex flex-col space-y-3">
				<Typography variant="caption" className="text-muted-foreground">
					Publish
				</Typography>
				<PublishButton
					loading={publishLoading}
					document={document}
					handleTogglePublish={handleTogglePublish}
				/>
			</div>
			<div className="flex flex-col space-y-3">
				<Typography variant="caption" className="text-muted-foreground">
					Last saved {document?.last_saved_at}
				</Typography>
				<SaveButton
					fullWidth
					loading={loading}
					document={document}
					handleSubmit={handleSubmit}
				/>
			</div>
			<Separator />
			<UserAutosuggest
				direction="row"
				label="User"
				errors={errors}
				name="user_id"
				value={document?.user_id}
				handleChange={handleChange}
			/>
		</div>
	)
}

export default AdminDocumentRightPanel

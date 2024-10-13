'use client'

import React from 'react'
import {
	DisplayFields,
	SocialButtons,
	ButtonActions,
	ExpandableText,
} from '../..'
import { Typography } from '../../../tailwind'
import { ShowProps } from './ShowItem'

type ShowLayoutProps = ShowProps & {
	fieldName?: string
	resource?: any
	children?: React.ReactNode
}

const ShowLayout: React.FC<ShowLayoutProps> = (props) => {
	const {
		resource,
		children,
		enableFavorites,
		enableLikes,
		enableSharing,
		buttons = [],
		displayFields = [],
	} = props || {}

	const { title, description } = resource || {}

	return (
		<div className="flex flex-col items-center justify-start w-full space-y-8">
			{buttons && (
				<div className="w-full sm:w-auto flex justify-center">
					<ButtonActions
						buttons={buttons}						
						justifyContent="center"
					/>
				</div>
			)}
			<div className="flex flex-col items-center space-y-6 max-w-[500px] w-full text-center">
				<Typography variant="h4">{title}</Typography>
				{displayFields?.length > 0 && (
					<DisplayFields fields={displayFields} resource={resource} />
				)}
			</div>
			<div className="w-full rounded">{children}</div>
			<SocialButtons
				resource={resource}
				enableLikes={enableLikes}
				enableFavorites={enableFavorites}
				enableSharing={enableSharing}
			/>
			<div className="w-full max-w-[500px] sm:max-w-full">
				<ExpandableText text={description} />
			</div>
		</div>
	)
}

export default ShowLayout

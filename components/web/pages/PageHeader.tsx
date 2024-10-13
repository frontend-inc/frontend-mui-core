import React from 'react'
import { Stack } from '../../../tailwind'
import { ButtonType } from '../../../types'
import { Heading, ButtonActions, Breadcrumbs } from '../../../components'

export type PageHeaderProps = {
	label?: string
	title?: string
	description?: string
	links: {
		label: string
		path: string
	}[]
	maxLinks?: number
	buttons: ButtonType[]
	resource?: any
	enableBorder?: boolean
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
	const {
		label,
		title,
		description,
		links,
		maxLinks = 3,
		buttons,
		resource,
	} = props

	return (
		<Stack className="w-full flex flex-col space-y-1">
			<Breadcrumbs maxLinks={maxLinks} links={links} />
			<Stack
				direction={'row'}
				className="flex justify-between w-full border-b border-divider pb-1 space-y-1 sm:space-y-0"
			>
				<Heading
					label={label}
					title={title}
					description={description}
					textAlign="left"
				/>
				{buttons?.length > 0 && (
					<div className="flex items-start justify-end sm:pb-0 xs:pb-1">
						<ButtonActions buttons={buttons} />
					</div>
				)}
			</Stack>
		</Stack>
	)
}

export default PageHeader

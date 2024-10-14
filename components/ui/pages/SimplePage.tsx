'use client'

import React from 'react'
import { Typography } from '../../../tailwind'

type SimplePageProps = {
	title: string
	body: string
	publishedAt?: string
	html?: boolean
	disablePadding?: boolean
}

const SimplePage: React.FC<SimplePageProps> = ({
	title,
	body,
	publishedAt,
	html = false,
	disablePadding = false,
}) => {
	return (
		<div
			className={`w-full flex justify-center items-start ${
				disablePadding ? '' : 'p-6'
			}`}
		>
			<div className="w-full max-w-3xl space-y-4">
				<Typography variant="h2" className="text-foreground text-center">
					{title}
				</Typography>
				<Typography variant="caption" className="block text-center">
					Last updated {publishedAt}
				</Typography>
				{html ? (
					<Typography
						variant="body1"
						
						className="whitespace-pre-line"
					>
						<div dangerouslySetInnerHTML={{ __html: body }} />
					</Typography>
				) : (
					<Typography
						variant="body1"
						
						className="whitespace-pre-line"
					>
						{body}
					</Typography>
				)}
			</div>
		</div>
	)
}

export default SimplePage

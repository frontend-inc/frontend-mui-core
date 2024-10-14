'use client'

import React from 'react'
import { Avatar, Stack, Typography } from '../../../tailwind'
import { ExpandableText } from '../../../components'

type TestimonialProps = {
	author: string
	text: string
	rating?: number
	image?: string
	size?: 'small' | 'large'
}

const TestimonialCard: React.FC<TestimonialProps> = (props) => {
	const { author, text, image = '' } = props || {}

	return (
		<div className={'p-4 h-[320px] border border-zinc-200 p-4 rounded-lg'}>
			<Stack justifyContent="space-between" className={'h-full'}>
				<div>
					{text && (
						<ExpandableText
							variant="subtitle1"
							className="text-muted-foreground"
							text={`"${text}"`}
						/>
					)}
				</div>
				<Stack direction="row" spacing={2}>
					<Avatar src={image} />
					<Typography variant="body2" className="text-muted-foreground">
						&mdash; {author}
					</Typography>
				</Stack>
			</Stack>
		</div>
	)
}

export default TestimonialCard

'use client'

import React from 'react'
import { Icon } from '../../../components'
import { QUESTION_VARIANTS } from '../../../constants'
import { cn } from '../../../shadcn/lib/utils'

type QuestionIconProps = {
	size?: number
	variant: string
}

const QuestionIcon: React.FC<QuestionIconProps> = ({ variant, size = 40 }) => {
	const question = QUESTION_VARIANTS.find((q) => q.variant === variant)

	if (!question) return null

	return (
		<div
			className={cn(question.color, 'flex items-center justify-center rounded')}
			style={{
				minWidth: `${size}px`,
				minHeight: `${size}px`,
				width: `${size}px`,
				height: `${size}px`,
			}}
		>
			<Icon name={question.icon} />
		</div>
	)
}

export default QuestionIcon

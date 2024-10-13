'use client'

import React from 'react'
import { Button } from '../../../../shadcn/ui/button'
import { Avatar } from '../../../../shadcn/ui/avatar'
import { Icon, Heading, Image } from '../../../../components'
import { HeadingProps } from '../../../../types'

type FormCardProps = HeadingProps & {
	image?: string
	buttonText: string
	checkMark?: boolean
	handleClick: () => void
}

const FormCard: React.FC<FormCardProps> = (props) => {
	const {
		title,
		description,
		image,
		checkMark,
		handleClick,
		buttonText = 'Continue',
	} = props

	return (
		<div className="flex flex-col items-center space-y-4">
			{checkMark && (
				<Avatar className="h-12 w-12 bg-primary text-primary-foreground">
					<Icon name="Check" className="h-6 w-6" />
				</Avatar>
			)}
			{image && (
				<Image
					src={image}
					height={320}
					alt={title || 'Form image'}
					className="w-full object-cover"
				/>
			)}
			<Heading title={title} description={description} textAlign="center" />
			<div>
				<Button onClick={handleClick} variant="default">
					{buttonText}
				</Button>
			</div>
		</div>
	)
}

export default FormCard

'use client'

import React from 'react'
import { Image, PrimaryButton } from '../../../components'
import { Typography } from '../../../tailwind'
import { AnswerType } from '../../../types'

type AdminAnswerProps = {
	question: AnswerType
	handleEdit: () => void
}

const AdminAnswerDetails: React.FC<AdminAnswerProps> = (props) => {
	const { question, handleEdit } = props || {}
	return (
		<div className="bg-background shadow-md rounded-md p-4">
			<div className="flex flex-row w-full justify-between items-start space-x-2">
				<div className="flex flex-row space-x-4">
					<div className="w-24 h-24">
						<Image
							src={question?.image?.url}
							alt={question?.title}
							width={96}
							height={96}
						/>
					</div>
					<div className="flex flex-col">
						<Typography variant="subtitle1" >
							{question?.title}
						</Typography>
						<Typography variant="body2" className="text-muted-foreground">
							{question?.description}
						</Typography>
					</div>
				</div>
				<div>
					<PrimaryButton onClick={handleEdit}>Edit</PrimaryButton>
				</div>
			</div>
		</div>
	)
}

export default AdminAnswerDetails

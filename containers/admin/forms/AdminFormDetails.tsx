'use client'

import React from 'react'
import { Image } from '../../../components'
import { Typography } from '../../../tailwind'
import { FormType } from '../../../types'
import { useRouter, useParams } from 'next/navigation'
import { Card } from '../../../shadcn/ui/card'
import { Button } from '../../../shadcn/ui/button'

type AdminFormProps = {
	form: FormType
	handleEdit: () => void
}

export default function AdminFormDetails(props: AdminFormProps) {
	const router = useRouter()
	const { app_id: appId } = useParams() as any

	const { form, handleEdit } = props || {}

	const handleResponses = () => {
		router.push(`/dashboard/${appId}/users/forms/${form.handle}/responses`)
	}

	return (
		<Card className="p-4">
			<div className="flex flex-row justify-between items-start w-full">
				<div className="flex flex-row space-x-4">
					<div className="w-24 h-24">
						<Image
							src={form?.image?.url}
							alt={form?.title}
							width={96}
							height={96}
							aspectRatio={1.0}
						/>
					</div>
					<div className="flex flex-col space-y-1">
						<Typography variant="subtitle1" color="text.primary">
							{form?.title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{form?.description}
						</Typography>
					</div>
				</div>
				<div className="flex flex-row space-x-2">
					<Button variant="outline" onClick={handleEdit}>
						Edit
					</Button>
					<Button onClick={handleResponses}>View Responses</Button>
				</div>
			</div>
		</Card>
	)
}

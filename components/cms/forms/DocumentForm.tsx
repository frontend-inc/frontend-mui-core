'use client'

import React, { useEffect, useContext } from 'react'
import { useApp } from '../../../hooks'
import { useResource } from 'frontend-js'
import { Form } from '../..'
import { useAlerts } from '../../../hooks'
import { useRouter, useParams } from 'next/navigation'
import { Card } from '../../../shadcn/ui/card'

export type DocumentFormProps = {
	loading?: boolean
	resource: any
	parentResource?: any
	url: string
	href?: string
	buttonText?: string
	fields: any[]
	onSuccessMessage?: string
	handleSuccess?: (resource: any) => void
	inputOptions?: Record<string, React.FC>
	inputParams?: Record<string, any>
}

const DocumentForm: React.FC<DocumentFormProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useApp()

	const { href } = props || {}
	const onSuccess = () => {
		if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	const {
		resource: _resource,
		parentResource,
		buttonText = 'Submit',
		fields,
		url,
		onSuccessMessage = 'Submitted successfully!',
		handleSuccess = onSuccess,
		inputOptions,
		inputParams,
	} = props

	const { showAlertSuccess } = useAlerts()

	const {
		delayedLoading: loading,
		errors,
		resource,
		setResource,
		update,
		create,
		removeAttachment,
		addReferences,
		handleChange,
	} = useResource({
		name: 'document',
		url,
	})

	const handleRemove = async (name) => {
		if (resource?.id) await removeAttachment(resource.id, name)
	}

	const handleSubmit = async () => {
		try {
			let resp
			if (resource?.id) {
				resp = await update(resource)
			} else {
				resp = await create(resource)
				// Handle associated resources
				if (parentResource?.id) {
					await addReferences(resp.id, [parentResource.id])
				}
			}
			if (resp?.id) {
				if (onSuccessMessage) {
					showAlertSuccess(onSuccessMessage)
				}
				if (handleSuccess) {
					handleSuccess(resp)
				}
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

	useEffect(() => {
		if (_resource) {
			setResource(_resource)
		} else {
			setResource({
				title: '',
			})
		}
	}, [_resource])

	return (
		<Card>
			<Form
				loading={loading}
				errors={errors}
				fields={fields}
				resource={resource}
				handleChange={handleChange}
				handleRemove={handleRemove}
				handleSubmit={handleSubmit}
				buttonText={buttonText}
				inputOptions={inputOptions}
				inputParams={inputParams}
			/>
		</Card>
	)
}

export default DocumentForm

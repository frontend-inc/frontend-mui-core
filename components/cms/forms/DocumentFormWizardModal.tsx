'use client'

import React, { useEffect, useState } from 'react'
import { useApp } from '../../../hooks'
import { useResource } from 'frontend-js'
import FormWizardModal from './FormWizardModal'
import FormCard from './wizard/FormCard'
import { useRouter, useParams } from 'next/navigation'

export type DocumentFormWizardModalProps = {
	handle: string
	resource?: any
	url: string
	variant?: 'contained' | 'outlined' | 'text'
	fields: any[]
	startTitle: string
	startDescription: string
	startImage: string
	startButtonText?: string
	buttonText?: string
	image: string
	endTitle: string
	endDescription: string
	endImage: string
	endButtonText: string
	href?: string
}

const DocumentFormWizardModal: React.FC<DocumentFormWizardModalProps> = (
	props
) => {
	const router = useRouter()
	const { clientUrl } = useApp()

	const {
		handle,
		resource: _resource,
		fields = [],
		url,
		startTitle,
		startDescription,
		startImage,
		startButtonText = 'Start',
		buttonText = 'Submit',
		endTitle,
		endDescription,
		endImage,
		endButtonText,
		href,
	} = props

	const [submitted, setSubmitted] = useState(false)

	const {
		loading,
		findOne,
		resource,
		setResource,
		update,
		create,
		addAttachment,
		removeAttachment,
		handleChange,
	} = useResource({
		url,
		name: 'document',
	})

	const [open, setOpen] = useState(false)

	const handleStartClick = () => {
		setOpen(true)
	}

	const handleResetForm = () => {
		setResource({})
		setSubmitted(false)
		setOpen(false)
	}

	const handleSuccess = () => {
		if (href) {
			router.push(`${clientUrl}${href}`)
		} else {
			handleResetForm()
		}
	}

	const handleAddAttachment = async (name, attachmentId) => {
		await addAttachment(resource?.id, name, attachmentId)
	}

	const handleRemove = async (name) => {
		await removeAttachment(resource?.id, name)
	}

	const handleRemoveAttachment = async (name) => {
		await removeAttachment(resource?.id, name)
	}

	const handleSubmit = async () => {
		try {
			let resp
			if (resource?.id) {
				resp = await update(resource)
			} else {
				resp = await create(resource)
			}
			if (resp?.id) {
				setSubmitted(true)
				setOpen(false)
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

	useEffect(() => {
		if (_resource?.id) {
			setResource(_resource)
		} else if (handle && url) {
			findOne(handle)
		}
	}, [_resource, handle, url])

	return (
		<div className="flex flex-col space-y-2 w-full">
			{!submitted ? (
				<FormCard
					title={startTitle}
					description={startDescription}
					image={startImage}
					buttonText={startButtonText}
					handleClick={handleStartClick}
				/>
			) : (
				<FormCard
					title={endTitle}
					description={endDescription}
					image={endImage}
					buttonText={endButtonText}
					handleClick={handleSuccess}
				/>
			)}
			<FormWizardModal
				open={open}
				handleClose={() => setOpen(false)}
				resource={resource}
				setResource={setResource}
				fields={fields}
				handleChange={handleChange}
				handleRemove={handleRemove}
				handleSubmit={handleSubmit}
				handleAddAttachment={handleAddAttachment}
				handleRemoveAttachment={handleRemoveAttachment}
				buttonText={buttonText}
			/>
		</div>
	)
}

export default DocumentFormWizardModal

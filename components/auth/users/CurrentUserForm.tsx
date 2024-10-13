'use client'

import React, { useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { Form } from '../..'
import { useAlerts } from '../../../hooks'
import { useRouter, useParams } from 'next/navigation'
import { FormFieldType } from '../../../types'
import { useApp } from '../../../hooks'

export type CurrentUserFormProps = {
	loading?: boolean
	href?: string
	buttonText?: string
	fields: FormFieldType[]
	onSuccessMessage?: string
	handleSuccess?: (resource: any) => void
}

const UserForm: React.FC<CurrentUserFormProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useApp()

	const { href } = props || {}
	const onSuccess = () => {
		if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	const {
		buttonText = 'Update Profile',
		fields,
		onSuccessMessage = 'Submitted successfully!',
		handleSuccess = onSuccess,
	} = props

	const { showAlertSuccess } = useAlerts()

	const {
		delayedLoading,
		errors,
		user,
		setUser,
		fetchMe,
		currentUser,
		updateMe,
		handleChange,
		deleteAvatar,
	} = useAuth()

	const handleRemove = async () => {
		await deleteAvatar()
	}

	const handleSubmit = async () => {
		try {
			let resp = await updateMe(user)
			if (resp?.id) {
				fetchMe()
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
		if (currentUser?.id) {
			setUser(currentUser)
		}
	}, [currentUser])

	return (
		<Form
			loading={delayedLoading}
			errors={errors}
			fields={fields}
			resource={user}
			handleChange={handleChange}
			handleRemove={handleRemove}
			handleSubmit={handleSubmit}
			buttonText={buttonText}
		/>
	)
}

export default UserForm

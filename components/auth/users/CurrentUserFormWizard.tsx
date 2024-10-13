import React, { useEffect, useState } from 'react'
import { useApp } from '../../../hooks'
import { Button } from '../../../tailwind'
import FormWizardProgress from '../../cms/forms/wizard/FormWizardProgress'
import FormWizardField from '../../cms/forms/wizard/FormWizardField'
import FormWizardButtons from '../../cms/forms/wizard/FormWizardButtons'
import { Modal } from '../..'
import { useRouter } from 'next/router'
import { useAuth } from 'frontend-js'

export type CurrentUserFormWizardProps = {
	handle: string
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

const CurrentUserFormWizard: React.FC<CurrentUserFormWizardProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useApp()

	const { fields = [], buttonText = 'Update Profile', href } = props

	const {
		user,
		setUser,
		currentUser,
		updateMe,
		handleChange,
		fetchMe,
		deleteAvatar,
	} = useAuth()

	const [submitted, setSubmitted] = useState(false)

	const [currentField, setCurrentField] = useState()
	const [currentStep, setCurrentStep] = useState(0)
	const [totalSteps, setTotalSteps] = useState(0)
	const [fadeIn, setFadeIn] = useState(false)
	const [open, setOpen] = useState(false)

	const handleStartClick = () => {
		setCurrentStep(0)
		setFadeIn(true)
		setOpen(true)
	}

	const handleResetForm = () => {
		setUser(currentUser)
		setSubmitted(false)
		setCurrentStep(0)
		setOpen(false)
	}

	const handleSuccess = () => {
		if (href) {
			router.push(`${clientUrl}${href}`)
		} else {
			handleResetForm()
		}
	}

	const handleRemove = async () => {
		await deleteAvatar()
	}

	const handleRemoveAttachment = async () => {
		await deleteAvatar()
	}

	const handleAddAttachment = async () => {}

	const handleSubmit = async () => {
		try {
			let resp = await updateMe(user)
			if (resp?.id) {
				setSubmitted(true)
				setOpen(false)
				if (handleSuccess) {
					handleSuccess()
				}
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

	const handleNextStep = () => {
		setFadeIn(false)
		let nextStep = currentStep + 1
		if (nextStep > totalSteps) {
			return
		}
		setTimeout(() => {
			setCurrentStep(nextStep)
			setFadeIn(true)
		}, 500)
	}

	const handlePrevStep = () => {
		const nextStep = currentStep - 1
		if (nextStep < 0) {
			return
		}
		setCurrentStep(nextStep)
	}

	useEffect(() => {
		if (fields) {
			setTotalSteps(fields.length - 1)
		}
	}, [fields])

	useEffect(() => {
		if (fields) {
			setCurrentField(fields[currentStep])
		}
	}, [fields, currentStep])

	useEffect(() => {
		if (currentUser?.id) {
			setUser(currentUser)
		}
	}, [currentUser])

	return (
		<div className="w-full flex flex-col justify-between items-center">
			<Button
				onClick={handleStartClick}
				variant="contained"
				color="primary"
				size="large"
				className="mb-4"
			>
				{buttonText}
			</Button>
			<Modal
				open={open}
				handleClose={() => setOpen(false)}
			>
				<FormWizardProgress currentStep={currentStep} totalSteps={totalSteps} />
				<div className="flex flex-col justify-center items-center w-full h-[calc(100vh-200px)]">
					<div className="px-2 py-4 w-full max-w-[600px]">
						{currentField && (
							<FormWizardField
								fadeIn={fadeIn}
								field={currentField}
								handleChange={handleChange}
								handleRemove={handleRemove}
								resource={user}
								setResource={setUser}
								handleAddAttachment={handleAddAttachment}
								handleRemoveAttachment={handleRemoveAttachment}
							/>
						)}
						<FormWizardButtons
							currentStep={currentStep}
							totalSteps={totalSteps}
							handleNextStep={handleNextStep}
							handlePrevStep={handlePrevStep}
							handleSubmit={handleSubmit}
							buttonText={buttonText}
						/>
					</div>
				</div>
			</Modal>
		</div>
	)
}

export default CurrentUserFormWizard

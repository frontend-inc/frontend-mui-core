'use client'

import React from 'react'
import FormWizard from './FormWizard'
import { Modal } from '../..'
import { FormWizardProps } from './FormWizard'

export type FormWizardModalProps = FormWizardProps & {
	open: boolean
	handleClose: () => void
}

const FormWizardModal: React.FC<FormWizardModalProps> = (props) => {
	const { open, handleClose } = props || {}

	return (
		<Modal open={open} handleClose={handleClose}>
			<FormWizard {...props} />
		</Modal>
	)
}

export default FormWizardModal

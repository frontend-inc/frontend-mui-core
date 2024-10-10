import React from 'react'
import { Fade, Typography, Stack } from '../../../../tailwind'

export type FormWizardInputWrapperProps = {
	title: string
	description?: string
	fadeIn: boolean
	timeout?: number
	children: React.ReactNode
}

const FormWizardInputWrapper: React.FC<FormWizardInputWrapperProps> = (
	props
) => {
	
  const { fadeIn, title, description, children } = props

	return (
    <Fade in={fadeIn}>
			<div className='flex flex-col space-y-4'>
        <div className='p-1 flex flex-col space-y-2'>
					<Typography variant="h4" color="text.primary">
						{title}
					</Typography>
					<Typography
						variant="body1"
						color="text.secondary"
					>
						{description}
					</Typography>
				</div>
        <div className='p-1'>
				  {children}
        </div>
			</div>
    </Fade>
	)
}

export default FormWizardInputWrapper

const sx = {
	title: {
		textAlign: 'left',
		width: '100%',
	},
	description: {
		textAlign: 'left',
		width: '100%',
	},
}

'use client'

import React from 'react'
import { SignInButton } from '../../../components'
import { SignInButtonProps } from './SignInButton'

const SignUpButton: React.FC<SignInButtonProps> = (props) => {
	const { buttonText = 'Sign Up' } = props

	return <SignInButton buttonText={buttonText} />
}

export default SignUpButton

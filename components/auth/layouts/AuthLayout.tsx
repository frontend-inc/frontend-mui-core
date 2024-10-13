'use client'

import React from 'react'
import { Container } from '../../../tailwind'

type AuthLayoutProps = {
	children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
	const { children } = props

	return (
		<div className="h-screen flex flex-col justify-center items-center">
			<Container maxWidth="sm">{children}</Container>
		</div>
	)
}

export default AuthLayout

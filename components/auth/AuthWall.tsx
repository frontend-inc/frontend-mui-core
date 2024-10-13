'use client'

import React from 'react'
import Login from './login/Login'
import { AuthLayout } from '../../components'
import { Container } from '../../tailwind'

const AuthWall: React.FC = () => {
	return (
		<Container maxWidth="sm">
			<div className="w-full h-full flex flex-row justify-center items-center pt-[20px] md:pt-[200px]">
				<AuthLayout>
					<Login />
				</AuthLayout>
			</div>
		</Container>
	)
}

export default AuthWall

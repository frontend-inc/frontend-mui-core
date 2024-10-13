import React from 'react'
import { Button } from '../../../tailwind'
import { TextInput, IconLoading } from '../..'
import { ShopifyCustomerType } from 'frontend-shopify'

type SignInFormProps = {
	errors?: any
	loading?: boolean
	customer: ShopifyCustomerType
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleForgotPassword: () => void
	handleSignup: () => void
}

const SignInForm: React.FC<SignInFormProps> = (props) => {
	const {
		errors,
		loading = false,
		customer,
		handleChange,
		handleSubmit,
		handleForgotPassword,
		handleSignup,
	} = props

	return (
		<div className="flex flex-col space-y-4">
			<TextInput
				errors={errors}
				name="email"
				value={customer?.email}
				placeholder="Email"
				handleChange={handleChange}
			/>
			<TextInput
				errors={errors}
				name="password"
				value={customer?.password}
				type="password"
				placeholder="Password"
				handleChange={handleChange}
			/>
			<Button
				className="w-full"
				onClick={handleSubmit}
				disabled={loading}
			>
				Sign In
				{loading && <IconLoading className="ml-2 h-4 w-4 animate-spin" />}
			</Button>
			{handleSignup && (
				<Button className="w-full" variant="text" onClick={handleSignup}>
					No account? Sign up
				</Button>
			)}
			{handleForgotPassword && (
				<Button
					className="w-full"
					variant="text"
					onClick={handleForgotPassword}
				>
					Forgot password?
				</Button>
			)}
		</div>
	)
}

export default SignInForm

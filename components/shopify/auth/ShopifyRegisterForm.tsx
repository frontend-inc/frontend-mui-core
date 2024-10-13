import React from 'react'
import { Button } from '../../../tailwind'
import { IconLoading, SwitchInput, TextInput } from '../..'
import { ShopifyCustomerType } from 'frontend-shopify'

type ShopifyRegisterFormProps = {
	loading: boolean
	customer: ShopifyCustomerType
	errors: Record<string, any>
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleLogin: () => void
}

const ShopifyRegisterForm: React.FC<ShopifyRegisterFormProps> = (props) => {
	const { loading, errors, customer, handleChange, handleSubmit, handleLogin } =
		props || {}

	return (
		<div className="flex flex-col space-y-4">
			<TextInput
				errors={errors}
				name="firstName"
				value={customer?.firstName}
				placeholder="First name"
				handleChange={handleChange}
			/>
			<TextInput
				errors={errors}
				name="lastName"
				value={customer?.lastName}
				placeholder="Last name"
				handleChange={handleChange}
			/>
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
			<SwitchInput
				errors={errors}
				name="acceptsMarketing"
				value={customer?.acceptsMarketing}
				placeholder="Accept marketing communication"
				handleChange={handleChange}
			/>
			<Button
				className="w-full"
				variant="default"
				onClick={handleSubmit}
				disabled={loading}
			>
				{loading && <IconLoading className="mr-2 h-4 w-4 animate-spin" />}
				Register
			</Button>
			<Button className="w-full" variant="text" onClick={handleLogin}>
				Already have an account? Sign in
			</Button>
		</div>
	)
}

export default ShopifyRegisterForm

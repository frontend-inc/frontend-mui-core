'use client'

import React, { useEffect } from 'react'
import { AuthScreen, Loader } from '../../../components'
import { useAuth, useCustomers } from 'frontend-shopify'
import { ShopifyCustomerForm } from '../../../components/shopify'

type ShopifyCustomerProps = {
	title?: string
	subtitle?: string
}

const ShopifyCustomer: React.FC<ShopifyCustomerProps> = (props) => {
	const { title = 'Customer details', subtitle = 'Update your account' } =
		props || {}

	const { errors, loading, customer, findCustomer, updateCustomer } =
		useCustomers()

	const {
		customer: authCustomer,
		setCustomer: setAuthCustomer,
		handleChange,
		accessToken,
	} = useAuth()

	useEffect(() => {
		if (customer) {
			setAuthCustomer(customer)
		}
	}, [customer])

	const handleSubmit = async () => {
		await updateCustomer(accessToken, {
			email: customer?.email,
			firstName: customer?.firstName,
			lastName: customer?.lastName,
			phone: customer?.phone,
			acceptsMarketing: customer?.acceptsMarketing,
		})
	}

	useEffect(() => {
		if (!customer?.email) {
			findCustomer(accessToken)
		}
	}, [customer])

	return (
		<>
			<Loader loading={loading} />
			<AuthScreen title={title} subtitle={subtitle}>
				<ShopifyCustomerForm
					loading={loading}
					customer={authCustomer}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			</AuthScreen>
		</>
	)
}

export default ShopifyCustomer

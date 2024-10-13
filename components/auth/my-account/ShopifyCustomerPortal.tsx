'use client'

import React from 'react'
import { Placeholder, PrimaryButton } from '../../../components'
import { useAlerts, useApp } from '../../../hooks'

const ShopifyCustomerPortal = () => {
	const { app } = useApp()
	const { showAlertError } = useAlerts()

	const handleClick = () => {
		if (app?.shopify_customer_portal_url) {
			window.open(app.shopify_customer_portal_url, '_blank')
		} else {
			showAlertError('Shopify Customer Portal not enabled.')
		}
	}

	return (
		<Placeholder
			icon="ShoppingCart"
			title="Shopify Customer Portal"
			description="Manage your order history and returns."
			buttons={
				<PrimaryButton onClick={handleClick} endIcon="ExternalLink">
					Open Customer Portal
				</PrimaryButton>
			}
		/>
	)
}

export default ShopifyCustomerPortal

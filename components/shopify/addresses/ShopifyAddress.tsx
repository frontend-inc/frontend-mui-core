import React, { useContext, useEffect, useState } from 'react'
import { AuthScreen, AlertModal, Loader } from '../..'
import { Button, Stack } from '@mui/material'
import { useAddresses } from 'frontend-shopify'
import { ShopifyAddressForm } from '..'
import { useApp } from '../../../hooks'
import { useRouter } from 'next/router'

type AddressProps = {
	title?: string
	subtitle?: string
}

type AddressRouterParams = {
	address_id: string | null
}

const Address: React.FC<AddressProps> = (props) => {
	const router = useRouter()
	let { address_id: addressId } = router?.query as AddressRouterParams
	if (addressId == 'new') {
		addressId = null
	}

	const { clientUrl } = useApp()
	const [showDeleteModal, setShowDeleteModal] = useState(false)

	const { title = 'Customer Addresses', subtitle = 'Manage your addresses' } =
		props || {}

	const {
		loading,
		address,
		handleChange,
		updateCustomerAddress,
		createCustomerAddress,
		deleteCustomerAddress,
		findCustomerAddress,
	} = useAddresses()

	const handleSubmit = async () => {
		if (address?.id) {
			await updateCustomerAddress(address)
		} else {
			await createCustomerAddress(address)
		}
	}

	const handleDeleteClick = () => {
		setShowDeleteModal(true)
	}

	const handleDeleteAddress = async () => {
		await deleteCustomerAddress(address?.id)
		router.push(`${clientUrl}/shopify/addresses`)
	}

	useEffect(() => {
		if (addressId) {
			findCustomerAddress(addressId)
		}
	}, [addressId])

	return (
		<>
			<Loader loading={loading} />
			<AuthScreen title={title} subtitle={subtitle}>
				<Stack spacing={1}>
					<ShopifyAddressForm address={address} handleChange={handleChange} />
					<Button
						fullWidth
						variant="contained"
						color="primary"
						onClick={handleSubmit}
					>
						Save Address
					</Button>
					<Button
						fullWidth
						variant="outlined"
						color="primary"
						onClick={handleDeleteClick}
					>
						Delete Address
					</Button>
				</Stack>
				<AlertModal
					open={showDeleteModal}
					handleClose={() => setShowDeleteModal(false)}
					handleConfirm={handleDeleteAddress}
				/>
			</AuthScreen>
		</>
	)
}

export default Address

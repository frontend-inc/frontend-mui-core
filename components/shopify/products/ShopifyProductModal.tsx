'use client'

import React from 'react'
import { Modal } from '../../../components'
import { ShopifyProductCard } from '../../../components/shopify'
import { ShopifyProductType } from 'frontend-shopify'

type ShopifyProductModalProps = {
	shopifyProduct: ShopifyProductType
	enableQuantity?: boolean
	open?: boolean
	buttonText?: string
	handleClose: () => void
}

const ShopifyProductModal: React.FC<ShopifyProductModalProps> = (props) => {
	const {
		open = false,
		shopifyProduct,
		enableQuantity,
		handleClose,
		buttonText,
	} = props

	return (
		<Modal open={open} handleClose={handleClose} maxWidth={'md'}>
			<ShopifyProductCard
				product={shopifyProduct}
				enableQuantity={enableQuantity}
				buttonText={buttonText}
			/>
		</Modal>
	)
}

export default ShopifyProductModal

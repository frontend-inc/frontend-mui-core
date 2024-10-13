'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminShopifyMetafieldForm, AdminShopifyMetafieldItem } from '../..'

const AdminShopifyMetafieldsList = () => {
	const { apiUrl } = useAdmin()

	if (!apiUrl) return null
	return (
		<ResourceList
			sortable
			url={`${apiUrl}/shopify_metafields`}
			name="shopify_metafield"
			enableCreate
			enableEdit
			enableSearch
			enableDelete
			query={{
				sort_by: 'position',
				sort_direction: 'asc',
			}}
			filterOptions={[
				{
					label: 'Type',
					field: 'variant',
					variant: 'multiple_choice',
					options: [
						{ label: 'String', value: 'string' },
						{ label: 'Text', value: 'text' },
						{ label: 'Number', value: 'number' },
						{ label: 'Shopify Products', value: 'products' },
						{ label: 'Shopify Collection', value: 'collection' },
					],
				},
			]}
			edit={AdminShopifyMetafieldForm}
			create={AdminShopifyMetafieldForm}
			component={AdminShopifyMetafieldItem}
			emptyIcon="Shirt"
			emptyTitle="No shopify metafields"
			emptyDescription="No shopify metafields yet."
		/>
	)
}

export default AdminShopifyMetafieldsList

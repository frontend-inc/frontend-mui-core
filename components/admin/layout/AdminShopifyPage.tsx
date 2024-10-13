'use client'

import React, { useEffect } from 'react'
import {
	AdminHeader,
	AdminMenu,
	AdminLayoutScroll,
	AdminLayoutLeft,
	AdminLayoutCenter,
	Placeholder,
	CircularLoader,
} from '../..'
import { AdminMenusType, AdminMenuType } from '../../../types'
import { useAdmin, useApps, useTabs } from '../../../hooks'
import { useRouter, useParams } from 'next/navigation'
import { ShopifyProvider } from 'frontend-shopify'

export type AdminShopifyPageProps = {
	title: string
	actions?: React.ReactNode
	activeTab: string
	activeMenu: string
	menuItems?: AdminMenusType
	enableEdit?: boolean
	enableDelete?: boolean
	handleEdit?: (menuItem: AdminMenuType) => void
	handleDelete?: (menuItem: AdminMenuType) => void
	disablePadding?: boolean
	leftPanel?: React.FC
	children: React.ReactNode
}

const AdminShopifyPage: React.FC<AdminShopifyPageProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useAdmin()

	const { app_id: appId } = useParams() as any

	const { loading, app, findApp } = useApps()

	const {
		title,
		actions,
		activeTab,
		activeMenu,
		menuItems,
		enableEdit,
		enableDelete,
		handleEdit,
		handleDelete,
		disablePadding = false,
		children,
	} = props || {}

	useTabs(activeTab)

	const handleClick = (menuItem) => {
		router.push(`${clientUrl}${menuItem.value}`)
	}

	useEffect(() => {
		if (appId) {
			findApp(appId)
		}
	}, [appId])

	if (loading) {
		return <CircularLoader size={64} />
	}
	if (!app?.shopify_domain || !app?.shopify_storefront_access_token) {
		return (
			<Placeholder
				title="Please connect your Shopify store"
				description="You need to connect your Shopify store to use this feature"
			/>
		)
	}
	return (
		<ShopifyProvider
			shopUrl="/editor/shop"
			domain={app.shopify_domain}
			storefrontAccessToken={app.shopify_storefront_access_token}
		>
			{menuItems && (
				<AdminLayoutLeft>
					<AdminMenu
						enableEdit={enableEdit}
						enableDelete={enableDelete}
						activeMenu={activeMenu}
						menuItems={menuItems}
						handleClick={handleClick}
						handleEdit={handleEdit}
						handleDelete={handleDelete}
					/>
				</AdminLayoutLeft>
			)}
			<AdminLayoutCenter>
				<AdminHeader title={title} buttons={actions} enableExpandLeftPanel />
				<AdminLayoutScroll>
					<div className="p-2">{children}</div>
				</AdminLayoutScroll>
			</AdminLayoutCenter>
		</ShopifyProvider>
	)
}

export default AdminShopifyPage

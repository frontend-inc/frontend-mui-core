'use client'

import React, { useState, useContext } from 'react'
import { AppContext } from '../../../context'
import { useAuth } from 'frontend-js'
import { Icon, Modal, MyAccountForm } from '../../../components'
import {
	StripeCustomerPortal,
	ShopifyCustomerPortal,
} from '../../../components'
import MyAccountTabs from './MyAccountTabs'
import { Button } from '../../../tailwind'
import { MetafieldType } from '../../../types'

type MyAccountModalProps = {
	enableStripe?: boolean
	metafields?: MetafieldType[]
}

const MyAccountModal: React.FC<MyAccountModalProps> = (props) => {
	const { enableStripe, metafields } = props || {}
	const { myAccountOpen, setMyAccountOpen } = useContext(AppContext)

	const {
		delayedLoading,
		user,
		currentUser,
		updateMe,
		handleChange,
		deleteAvatar,
		logout,
	} = useAuth()

	const [currentTab, setCurrentTab] = useState<number>()

	const handleLogout = async () => {
		await logout()
		setMyAccountOpen(false)
	}

	const handleDeleteAvatar = async () => {
		await deleteAvatar()
	}

	const handleSubmit = async () => {
		await updateMe(user)
	}

	const handleClick = (tab: any) => {
		if (tab.url) {
			window.open(tab.url, '_blank')
		} else {
			setCurrentTab(tab.value)
		}
	}

	return (
		<Modal
			open={myAccountOpen}
			handleClose={() => setMyAccountOpen(false)}
			title={
				currentUser?.id
					? `${currentUser?.first_name} ${currentUser?.last_name}`
					: 'My Account'
			}
		>
			{currentTab == null ? (
				<MyAccountTabs
					tab={currentTab}
					enableStripe={enableStripe}
					handleClick={handleClick}
				/>
			) : (
				<div className="p-1">
					<Button
						color="secondary"
						variant="contained"
						startIcon={
							<Icon name="ChevronLeft" color="text.primary" size={24} />
						}
						onClick={() => setCurrentTab(null)}
					>
						Back
					</Button>
				</div>
			)}
			<div className="p-2">
				{currentTab == 0 && (
					<MyAccountForm
						loading={delayedLoading}
						user={user}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
						handleDeleteAvatar={handleDeleteAvatar}
						handleLogout={handleLogout}
						metafields={metafields}
					/>
				)}
				{currentTab == 1 && <StripeCustomerPortal />}
				{currentTab == 2 && <ShopifyCustomerPortal />}
			</div>
		</Modal>
	)
}

export default MyAccountModal

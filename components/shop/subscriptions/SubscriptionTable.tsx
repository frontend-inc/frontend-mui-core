'use client'

import React, { useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { Placeholder } from '../..'
import SubscriptionTableCard from './SubscriptionTableCard'
import { useSubscriptions, useApp } from '../../../hooks'
import { useRouter, useParams } from 'next/navigation'
import { cn } from '../../../shadcn/lib/utils'

export default function SubscriptionTable() {
	const router = useRouter()
	const {
		delayedLoading: loading,
		subscribe,
		subscriptions,
		findSubscriptions,
	} = useSubscriptions()

	const { currentUser } = useAuth()
	const { setAuthOpen } = useApp()

	const handleSubscribe = async (subscription: any) => {
		if (!currentUser?.id) return setAuthOpen(true)
		let currentUrl = window.location.href
		let resp = await subscribe(subscription?.id, {
			success_url: currentUrl,
			cancel_url: currentUrl,
		}) as any
		if (resp?.url) {      
			router.push(resp.url)
		}
	}

	useEffect(() => {
		findSubscriptions()
	}, [])

	return (
		<>
			<div
				className={cn(
					'w-full flex justify-center items-center',
					'sm:flex-row flex-col space-y-2 sm:space-y-0 sm:space-x-2',
					loading && 'opacity-50'
				)}
			>
				{subscriptions?.map((subscription) => {
					const selected = currentUser?.subscription_id === subscription.id
					return (
						<SubscriptionTableCard
							key={subscription.id}
							selected={selected}
							subscription={subscription}
							handleClick={() => handleSubscribe(subscription)}
						/>
					)
				})}
			</div>
			{!loading && !subscriptions?.length && (
				<Placeholder
					icon="CreditCard"
					title="No subscription plans"
					description="Subscription plans will appear here."
				/>
			)}
		</>
	)
}

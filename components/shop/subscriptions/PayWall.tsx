'use client'

import React from 'react'
import { Heading, SubscriptionTable } from '../../../components'

const PayWall: React.FC = () => {
	return (
		<div className="flex flex-col space-y-4">
			<Heading
				title="Subscription required"
				description="Please subscribe below to continue"
				textAlign="center"
			/>
			<div className="w-full">
				<SubscriptionTable />
			</div>
		</div>
	)
}

export default PayWall

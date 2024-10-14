'use client'

import React from 'react'
import { Check } from 'lucide-react'
import { cn } from '../../../shadcn/lib/utils'
import { Button } from '../../../shadcn/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '../../../shadcn/ui/card'
import { Badge } from '../../../shadcn/ui/badge'
import { SubscriptionType } from '../../../types'
import { Typography } from '../../../tailwind'

type SubscriptionTableCardProps = {
	selected?: boolean
	buttonText?: string
	handleClick: () => void
	subscription: SubscriptionType
}

export default function SubscriptionTableCard({
	buttonText = 'Subscribe',
	selected,
	handleClick,
	subscription,
}: SubscriptionTableCardProps) {
	return (
		<Card
			className={cn(
				'w-full max-w-sm',
				'transition-all duration-300 ease-in-out',
				'hover:shadow-lg'
			)}
		>
			<CardHeader>
				<div className="flex justify-between items-center">
					{subscription?.label && (
						<Badge variant="secondary">{subscription.label}</Badge>
					)}
				</div>
				<Typography className="text-muted-foreground"variant="subtitle1">
					{subscription?.name}
				</Typography>
				<Typography variant="h4">{subscription.display_price}</Typography>
			</CardHeader>
			<CardContent>
				<div className="mt-2 space-y-4  min-h-[150px]">
					{subscription?.features?.map((feature, i) => (
						<div key={i} className="flex items-start">
							<Check className="w-5 h-5 mx-2 text-primary" />
							<span className="text-sm">{feature}</span>
						</div>
					))}
				</div>
			</CardContent>
			<CardFooter>
				<Button onClick={handleClick} className="w-full">
					{buttonText}
				</Button>
			</CardFooter>
		</Card>
	)
}

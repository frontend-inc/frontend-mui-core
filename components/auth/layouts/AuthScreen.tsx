'use client'

import React from 'react'
import { Card, CardContent } from '../../../shadcn/ui/card'
import { Typography } from '../../../tailwind'

type AuthScreenProps = {
	title: string
	subtitle?: string
	children: React.ReactNode
}

export default function AuthScreen({
	title,
	subtitle,
	children,
}: AuthScreenProps) {
	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-md">
			<Card className="w-full p-4 sm:p-6 border border-border rounded-lg bg-background">
				<CardContent className="space-y-4">
					<div className="space-y-2">
						<Typography variant="h4" className="text-center font-bold">
							{title}
						</Typography>
						{subtitle && (
							<Typography
								variant="body2"
								color="text.secondary"
								className="text-center"
							>
								{subtitle}
							</Typography>
						)}
					</div>
					{children}
				</CardContent>
			</Card>
		</div>
	)
}

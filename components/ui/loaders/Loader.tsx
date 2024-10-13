'use client'

import React from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '../../../shadcn/lib/utils'

type LoaderProps = {
	loading?: boolean
	delay?: number
}

export default function Loader({ loading }: LoaderProps) {
	if (!loading) return null

	return (
		<div
			className={cn(
				'flex flex-col items-center justify-center',
				'w-full h-full min-h-[200px]'
			)}
		>
			<Loader2 className="text-foreground w-12 h-12 animate-spin text-primary" />
		</div>
	)
}

'use client'

import React from 'react'
import { Badge } from '../../../shadcn/ui/badge'
import { cn } from '../../../shadcn/lib/utils'

type PublishedLabelProps = {
	published?: boolean
}

export default function PublishedLabel({
	published = false,
}: PublishedLabelProps) {
	return (
		<Badge
			variant="outline"
			className={cn(
				'px-2 py-1 text-xs font-semibold',
				published
					? 'bg-green-100 text-green-800 border-green-200'
					: 'bg-blue-100 text-blue-800 border-blue-200'
			)}
		>
			{published ? 'Published' : 'Draft'}
		</Badge>
	)
}

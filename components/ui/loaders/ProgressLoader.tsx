'use client'

import React from 'react'
import { Progress } from '../../../shadcn/ui/progress'

export default function ProgressLoader() {
	return (
		<div className="p-6 flex justify-center items-center">
			<div className="relative">
				<Progress
					className="h-1 w-[220px] bg-transparent rounded"
					value={100}
				/>
			</div>
		</div>
	)
}

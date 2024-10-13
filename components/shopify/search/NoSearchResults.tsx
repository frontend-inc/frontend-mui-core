'use client'

import React from 'react'
import { Placeholder } from '../../../components'

const NoSearchResults: React.FC = () => {
	return (
		<div className="flex flex-row w-full justify-center">
			<Placeholder
				title="No search results"
				description="Please try another query."
			/>
		</div>
	)
}

export default NoSearchResults

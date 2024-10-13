'use client'

import React from 'react'
import { Placeholder, BrandLogos } from '../..'

export type LogosProps = {
	title?: string
	logos: {
		image: string
		title: string
	}[]
}

const Logos: React.FC<LogosProps> = (props) => {
	const { logos = [] } = props

	return (
		<div className="flex flex-col w-full">
			<BrandLogos logos={logos} width={128} height={48} />
			{logos?.length === 0 && (
				<Placeholder
					icon="Image"
					title="No logos"
					description="Logos will appear here"
				/>
			)}
		</div>
	)
}

export default Logos

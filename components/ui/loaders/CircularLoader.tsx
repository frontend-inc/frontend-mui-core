'use client'

import React from 'react'
import { CircularProgress } from '../../../tailwind'

type LoaderProps = {
	size?: number
}

const Loader: React.FC<LoaderProps> = (props) => {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<CircularProgress />
		</div>
	)
}

export default Loader

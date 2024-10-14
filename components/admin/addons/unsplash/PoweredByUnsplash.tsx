'use client'

import React from 'react'
import { Typography } from '../../../../tailwind'
import UnsplashLogo from './UnsplashLogo'

const PoweredByUnsplash: React.FC = () => {
	return (
		<div className="flex flex-row space-x-2 w-full justify-center items-center">
			<Typography variant="body2" className="text-muted-foreground">
				Powered by
			</Typography>
			<UnsplashLogo />
		</div>
	)
}

export default PoweredByUnsplash

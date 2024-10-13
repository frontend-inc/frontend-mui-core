'use client'

import React from 'react'

const NotFound: React.FC = () => {
	return (
		<div className="flex flex-col sm:flex-row items-center justify-center w-full h-full text-center p-4 space-y-4 sm:space-y-0 sm:space-x-4">
			<h1 className="text-4xl font-bold text-primary">404</h1>
			<div className="hidden sm:block w-0.5 h-20 bg-divider"></div>
			<p className="text-lg text-muted-foreground">Page not found</p>
		</div>
	)
}

export default NotFound

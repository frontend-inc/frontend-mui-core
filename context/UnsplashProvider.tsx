'use client'

import React from 'react'
import UnsplashContext from './UnsplashContext'

type UnsplashProviderProps = {
	apiKey?: string
	children: React.ReactNode
}

const UnsplashProvider = (props: UnsplashProviderProps) => {
	const { children, apiKey } = props || {}

	const value = {
		unsplashApiKey: apiKey,
	}

	return (
		<UnsplashContext.Provider value={value}>
			{children}
		</UnsplashContext.Provider>
	)
}

export default UnsplashProvider

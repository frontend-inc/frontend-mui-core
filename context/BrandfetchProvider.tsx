'use client'

import React from 'react'
import BrandfetchContext from './BrandfetchContext'

type BrandfetchProviderProps = {
	apiKey?: string
	children: React.ReactNode
}

const BrandfetchProvider = (props: BrandfetchProviderProps) => {
	const { children, apiKey } = props || {}

	const value = {
		apiKey,
	}

	return (
		<BrandfetchContext.Provider value={value}>
			{children}
		</BrandfetchContext.Provider>
	)
}

export default BrandfetchProvider

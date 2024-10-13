'use client'

import React from 'react'
import ThemeContext from './ThemeContext'

type ThemeProviderProps = {
	children: React.ReactNode
	primaryColor?: string
	bgcolor?: string
	headerFont?: string
	bodyFont?: string
	borderRadius?: number
	textPrimary?: string //color
	textSecondary?: string //color
}

const ThemeProvider = (props: ThemeProviderProps) => {
	const {
		primaryColor,
		bgcolor,
		textPrimary,
		textSecondary,
		headerFont,
		bodyFont,
		borderRadius,
		children,
	} = props || {}

	const value = {
		primaryColor,
		bgcolor,
		textPrimary,
		textSecondary,
		headerFont,
		bodyFont,
		borderRadius,
	}

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider

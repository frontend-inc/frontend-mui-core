'use client'

import React, { useState, useEffect } from 'react'
import { cn } from 'frontend-shadcn'
import { useTheme } from '../../hooks'

interface TypographyProps {
	variant:
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'subtitle1'
		| 'subtitle2'
		| 'body1'
		| 'body2'
		| 'button'
		| 'caption'
		| 'overline'
	color?: string
	textAlign?: 'left' | 'center' | 'right'
	fontFamily?: string
	className?: string
	children: React.ReactNode
}

const Typography: React.FC<TypographyProps> = ({
	variant,
	color = 'text.primary',
	textAlign = 'left',	
	className,
	children,
}) => {

  const { headerFont, bodyFont } = useTheme()
  
  useEffect(() => {
    console.log('headerFont', headerFont)
    console.log('bodyFont', bodyFont)
  }, [headerFont, bodyFont])

	const baseClasses = cn(
		color === 'text.primary' && 'text-foreground',
		color == 'text.secondary' && 'text-muted-foreground',
		color,
		'whitespace-pre-line'
	)

	const variantClasses = {
		h1: 'text-6xl font-semibold tracking-tight',
		h2: 'text-5xl font-semibold tracking-tight',
		h3: 'text-4xl font-medium',
		h4: 'text-3xl font-medium',
		h5: 'text-2xl font-medium',
		h6: 'text-xl font-medium',
		subtitle1: 'text-lg font-medium',
		subtitle2: 'text-base font-medium',
		button: 'text-base',
		body1: 'text-base',
		body2: 'text-sm',
		caption: 'text-sm',
		overline: 'text-xs uppercase tracking-widest',
	}

  const fontFamily = {
		h1: 'font-header',
		h2: 'font-header',
		h3: 'font-header',
		h4: 'font-header',
		h5: 'font-header',
		h6: 'font-header',
		subtitle1: 'font-header',
		subtitle2: 'font-header',
		button: 'font-body',
		body1: 'font-body',
		body2: 'font-body',
		caption: 'font-body',
		overline: 'font-body'
	}

	const alignmentClasses = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right',
	}

	return (
		<div
			className={cn(
				baseClasses,
				fontFamily[variant],
				variantClasses[variant],
				alignmentClasses[textAlign],
				className
			)}      
		>
			{children}
		</div>
	)
}

export { Typography }

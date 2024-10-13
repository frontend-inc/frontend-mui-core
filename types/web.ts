'use client'

import React from 'react'
import { ButtonType } from './buttons'
import { DisplayFieldType, FormFieldType } from './forms'

export type HeadingProps = {
	label?: string
	title?: string
	description?: string
	textAlign?: 'left' | 'center'
}

export type SectionProps = {
	children?: React.ReactNode
	enableTransitions?: boolean
	bgColor?: string
	mode?: 'dark' | 'light'
	maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false
	py?: number
	px?: number
	requireAuth?: boolean
	requirePaid?: boolean
}

export type FormProps = {
	fields: FormFieldType[]
	editFields?: FormFieldType[]
	createFields?: FormFieldType[]
}

export type ForeignProps = {
	resource: any
	foreignUrl: string
	foreignContentType: string
}

export type CardProps = {
	ref?: any
	buttons: ButtonType[]
	displayFields: DisplayFieldType[]
	enableUsers?: boolean
	enableComments?: boolean
	enableFavorites?: boolean
	enableRatings?: boolean
	enableLikes?: boolean
	resource: any
	href?: string
	height?: number
	width?: number
	handleClick?: () => void
	handleEdit?: (item: any) => void
	handleDelete?: (item: any) => void
	enableGradient?: boolean
	enableOverlay?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
}

export type PriceType = {
	id?: number
	label: string
	title: string
  description?: string
	price: number
	features: string[]
	recurring?: boolean
	interval?: string
	buttonText: string
	url?: string
}

export type TestimonialType = {
	rating: number
	title: string
	description: string
	image: string
	size?: 'small' | 'large'
}

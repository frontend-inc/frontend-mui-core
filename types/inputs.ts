'use client'

import React from 'react'

export type SyntheticEventType = React.ChangeEvent<HTMLInputElement>
	| {
			target: {
				name: string
				value: any
			}
	  }

export type OptionType = {
	label: string
	value: string
	icon?: string
	image?: string
}

export type TypographyVariantsType =
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

export type AttachmentInputProps = {
	errors?: any
	name: string
	label?: string
	handleChange: (e: SyntheticEventType) => void
	value: any
	handleRemove: (name: string) => void
	variant?: 'image' | 'file'
	objectFit?: 'contain' | 'cover'
	size?: number
	placeholder?: string
	info?: string
}

export type InputPropsType = {
	errors?: any
	value?: any
	name: string
	label?: string
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void
	disabled?: boolean
	options?: OptionType[]
	direction?: 'row' | 'column'
	styles?: any
	info?: string
}

export type TextInputPropsType = InputPropsType & {
	direction?: 'row' | 'column'
	type?: string
	className?: string
}

export type SelectInputPropsType = InputPropsType & {
	options: OptionType[]
}

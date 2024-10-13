'use client'

import React from 'react'
import { Input } from '../../../shadcn/ui/input'
import { Button } from '../../../shadcn/ui/button'
import { Loader2 } from 'lucide-react'
import { cn } from '../../../shadcn/lib/utils'
import { TextInputPropsType } from '../../../types'

type TextButtonInputProps = TextInputPropsType & {
	loading?: boolean
	onClick: () => void
	color?: 'primary' | 'secondary'
	children: React.ReactNode
}

export default function TextButtonInput({
	name,
	value,
	handleChange,
	placeholder,
	color = 'primary',
	onClick,
	loading,
	children,
}: TextButtonInputProps) {
	return (
		<div className="flex w-full items-end">
			<Input
				name={name}
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				className={cn(
					'py-3',
					'rounded-r-none',
					'focus-visible:ring-0 focus-visible:ring-offset-0',
					'border-r-0'
				)}
			/>
			<Button
				size="sm"
				variant={color === 'primary' ? 'default' : 'secondary'}
				className={cn(
					'h-[43px] px-3 py-0 rounded-l-none',
					'focus-visible:ring-0 focus-visible:ring-offset-0'
				)}
				onClick={onClick}
			>
				{loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
				{children}
			</Button>
		</div>
	)
}

'use client'

import React from 'react'
import { cn } from '../../shadcn/lib/utils'

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	required?: boolean
	error?: boolean
	disabled?: boolean
}

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
	({ className, children, required, error, disabled, ...props }, ref) => {
		return (
			<label
				ref={ref}
				className={cn(
					'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
					error && 'text-destructive',
					disabled && 'opacity-50 cursor-not-allowed',
					className
				)}
				{...props}
			>
				{children}
				{required && <span className="text-destructive ml-1">*</span>}
			</label>
		)
	}
)

FormLabel.displayName = 'FormLabel'

export { FormLabel }

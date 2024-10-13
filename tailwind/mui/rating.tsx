'use client'

import React, { useState } from 'react'
import { Star, StarHalf } from 'lucide-react'
import { cn } from '../../shadcn/lib/utils'

interface RatingProps {
	name?: string
	value: number
	onChange?: (value: number) => void
	max?: number
	precision?: 0.5 | 1
	size?: 'sm' | 'md' | 'lg'
	readOnly?: boolean
	disabled?: boolean
	className?: string
}

const sizeClasses = {
	sm: 'w-4 h-4',
	md: 'w-5 h-5',
	lg: 'w-6 h-6',
}

function Rating({
	name,
	value,
	onChange,
	max = 5,
	precision = 1,
	size = 'md',
	readOnly = false,
	disabled = false,
	className,
}: RatingProps) {
	const [hoverValue, setHoverValue] = useState<number | null>(null)

	const handleMouseMove = (
		event: React.MouseEvent<HTMLDivElement>,
		index: number
	) => {
		if (readOnly || disabled) return

		const rect = event.currentTarget.getBoundingClientRect()
		const x = event.clientX - rect.left
		const percent = x / rect.width

		if (precision === 0.5) {
			setHoverValue(percent > 0.5 ? index + 1 : index + 0.5)
		} else {
			setHoverValue(percent > 0.5 ? index + 1 : index)
		}
	}

	const handleMouseLeave = () => {
		setHoverValue(null)
	}

	const handleClick = (index: number) => {
		if (readOnly || disabled) return
		onChange(hoverValue || index + 1)
	}

	return (
		<div
			className={cn(
				'inline-flex',
				disabled && 'opacity-50 cursor-not-allowed',
				className
			)}
		>
			{[...Array(max)].map((_, index) => {
				const filled = (hoverValue !== null ? hoverValue : value) > index
				const halfFilled =
					precision === 0.5 &&
					(hoverValue !== null ? hoverValue : value) === index + 0.5

				return (
					<div
						key={index}
						className={cn(
							'relative cursor-pointer',
							sizeClasses[size],
							readOnly && 'cursor-default',
							disabled && 'cursor-not-allowed'
						)}
						onMouseMove={(e) => handleMouseMove(e, index)}
						onMouseLeave={handleMouseLeave}
						onClick={() => handleClick(index)}
					>
						<input
							type="radio"
							name={name}
							value={index + 1}
							className="sr-only"
							disabled={disabled || readOnly}
							checked={value === index + 1}
							onChange={() => {}}
						/>
						{halfFilled ? (
							<StarHalf className={cn('text-primary', sizeClasses[size])} />
						) : (
							<Star
								className={cn(
									filled ? 'text-primary' : 'text-muted-foreground',
									sizeClasses[size]
								)}
								fill={filled ? 'currentColor' : 'none'}
							/>
						)}
					</div>
				)
			})}
		</div>
	)
}

export { Rating }

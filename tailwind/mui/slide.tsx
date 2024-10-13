'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../shadcn/lib/utils'

type Direction = 'up' | 'down' | 'left' | 'right'

interface SlideProps {
	children: React.ReactNode
	in?: boolean
	direction?: Direction
	duration?: number
	className?: string
}

const slideVariants = {
	up: {
		initial: { y: '100%' },
		animate: { y: 0 },
		exit: { y: '100%' },
	},
	down: {
		initial: { y: '-100%' },
		animate: { y: 0 },
		exit: { y: '-100%' },
	},
	left: {
		initial: { x: '100%' },
		animate: { x: 0 },
		exit: { x: '100%' },
	},
	right: {
		initial: { x: '-100%' },
		animate: { x: 0 },
		exit: { x: '-100%' },
	},
}

export const Slide: React.FC<SlideProps> = ({
	children,
	in: inProp = false,
	direction = 'down',
	duration = 0.3,
	className,
}) => {
	return (
		<AnimatePresence>
			{inProp && (
				<motion.div
					initial={slideVariants[direction].initial}
					animate={slideVariants[direction].animate}
					exit={slideVariants[direction].exit}
					transition={{ duration, ease: 'easeInOut' }}
					className={cn('overflow-hidden', className)}
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	)
}

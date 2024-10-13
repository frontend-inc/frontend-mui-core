'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../shadcn/lib/utils'

interface FadeProps {
	children: React.ReactNode
	in?: boolean
	duration?: number
	className?: string
}

const Fade: React.FC<FadeProps> = ({
	children,
	in: inProp = false,
	duration = 0.3,
	className,
}) => {
	return (
		<AnimatePresence>
			{inProp && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration }}
					className={cn(className)}
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export { Fade }

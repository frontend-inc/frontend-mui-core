'use client'

import React, { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../shadcn/lib/utils'

interface CollapseProps {
	in: boolean
	children: React.ReactNode
	className?: string
	timeout?: number
}

export const Collapse: React.FC<CollapseProps> = ({
	in: inProp,
	children,
	className,
	timeout = 300,
}) => {
	const contentRef = useRef<HTMLDivElement>(null)
	const [height, setHeight] = React.useState<number | 'auto'>(0)

	useEffect(() => {
		if (inProp && contentRef.current) {
			setHeight(contentRef.current.scrollHeight)
		} else {
			setHeight(0)
		}
	}, [inProp])

	return (
		<AnimatePresence initial={false}>
			{(inProp || height !== 0) && (
				<motion.div
					className={cn('overflow-hidden', className)}
					initial={{ height: 0 }}
					animate={{ height: inProp ? height : 0 }}
					exit={{ height: 0 }}
					transition={{ duration: timeout / 1000, ease: 'easeInOut' }}
				>
					<div ref={contentRef}>{children}</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

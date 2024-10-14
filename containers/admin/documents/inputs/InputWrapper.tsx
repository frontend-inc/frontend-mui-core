'use client'

import React, { useState } from 'react'
import { Label } from '../../../../components'
import { IconButton, Typography, Collapse } from '../../../../tailwind'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../../../shadcn/lib/utils'

type DocumentInputWrapperProps = {
	title: string
	label: string
	children: React.ReactNode
	defaultOpen?: boolean
	expandable?: boolean
	disablePadding?: boolean
}

const DocumentInputWrapper: React.FC<DocumentInputWrapperProps> = (props) => {
	const {
		title,
		label,
		children,
		defaultOpen = true,
		expandable = false,
		disablePadding = false,
	} = props

	const [open, setOpen] = useState(defaultOpen)

	return (
		<div
			className={cn(
				'w-full flex flex-row justify-start items-start',
				!disablePadding && 'pb-2'
			)}
		>
			{expandable && (
				<div>
					<IconButton onClick={() => setOpen(!open)}>
						<ChevronDown
							className={cn(
								'h-5 w-5 rounded text-gray-500 bg-gray-100 transition-transform duration-200',
								!open && 'rotate-[-90deg]'
							)}
						/>
					</IconButton>
				</div>
			)}
			<div
				className={cn(
					'flex-grow sm:flex-grow-[0.5] w-full pr-0 pl-1 border-l-3 border-transparent hover:border-primary transition-colors duration-300 ease-in-out'
				)}
			>
				<div className="flex flex-row justify-between items-center">
					<Typography variant="overline" className="text-muted-foreground">
						{title}
					</Typography>
					<Label label={label} />
				</div>
				{children}
			</div>
		</div>
	)
}

export default DocumentInputWrapper

'use client'

import React from 'react'
import {
	Accordion as ShadcnAccordion,
	AccordionContent as ShadcnAccordionContent,
	AccordionItem as ShadcnAccordionItem,
	AccordionTrigger as ShadcnAccordionTrigger,
} from '../../shadcn/ui/accordion'
import { cn } from '../../shadcn/lib/utils'

// MUI to shadcn Accordion conversion
const Accordion: React.FC<React.ComponentProps<typeof ShadcnAccordion>> = ({
	children,
	...props
}) => {
	return <ShadcnAccordion {...props}>{children}</ShadcnAccordion>
}

// MUI to shadcn AccordionSummary conversion
const AccordionSummary: React.FC<
	React.ComponentProps<typeof ShadcnAccordionTrigger> & {
		expandIcon?: React.ReactNode
	}
> = ({ children, expandIcon, className, ...props }) => {
	return (
		<ShadcnAccordionTrigger
			className={cn('flex items-center justify-between', className)}
			{...props}
		>
			<div>{children}</div>
			{expandIcon && <div className="shrink-0">{expandIcon}</div>}
		</ShadcnAccordionTrigger>
	)
}

// MUI to shadcn AccordionDetails conversion
const AccordionDetails: React.FC<
	React.ComponentProps<typeof ShadcnAccordionContent>
> = ({ children, ...props }) => {
	return <ShadcnAccordionContent {...props}>{children}</ShadcnAccordionContent>
}

// Wrapper component to provide MUI-like structure
const AccordionWrapper: React.FC<
	React.ComponentProps<typeof ShadcnAccordionItem>
> = ({ children, ...props }) => {
	return <ShadcnAccordionItem {...props}>{children}</ShadcnAccordionItem>
}

export { Accordion, AccordionSummary, AccordionDetails, AccordionWrapper }

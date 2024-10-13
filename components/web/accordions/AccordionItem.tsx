'use client'

import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../../../shadcn/ui/accordion'
import { Typography } from '../../../tailwind'
import { cn } from '../../../shadcn/lib/utils'

type AccordionItemProps = {
	primary: string
	secondary: React.ReactNode
}

const AccordionItemComponent: React.FC<AccordionItemProps> = (props) => {
	const { primary, secondary } = props

	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item">
				<AccordionTrigger className="hover:no-underline">
					<Typography variant="body1">{primary}</Typography>
				</AccordionTrigger>
				<AccordionContent>
					<Typography variant="body2" className="text-muted-foreground">
						{secondary}
					</Typography>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}

export default AccordionItemComponent

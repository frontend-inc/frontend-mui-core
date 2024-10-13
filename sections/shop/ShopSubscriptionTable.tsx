'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { SubscriptionTable } from '../../components'
import { SectionProps, HeadingProps } from '../../types'

type ShopSubscriptionTableProps = SectionProps & HeadingProps

const ShopSubscriptionTable: React.FC<ShopSubscriptionTableProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign = 'center',
		bgColor,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,

		requirePaid,
		...rest
	} = props

	return (
		<Section
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
			requireAuth={requireAuth}
			requirePaid={requirePaid}
		>
			<div className="flex flex-col space-y-4">
				<Heading
					label={label}
					title={title}
					description={description}
					textAlign={textAlign}
				/>
				<SubscriptionTable />
			</div>
		</Section>
	)
}

export default ShopSubscriptionTable

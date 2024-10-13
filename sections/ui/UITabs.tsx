'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { Tabs } from '../../components'
import { TabsProps } from '../../components/web/tabs/Tabs'
import { SectionProps, HeadingProps } from '../../types'

type UITabsProps = SectionProps & HeadingProps & TabsProps

const UITabs: React.FC<UITabsProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
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
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<Tabs {...rest} />
		</Section>
	)
}

export default UITabs

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
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		requireTeam,
		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
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

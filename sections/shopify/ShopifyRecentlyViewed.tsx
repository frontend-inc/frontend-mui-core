import React from 'react'
import { Section, Heading } from '../../components'
import { RecentlyViewed } from '../../components/shopify'
import { RecentlyViewedProps } from '../../components/shopify/recently-viewed/RecentlyViewed'
import { SectionProps, HeadingProps } from '../../types'

type ShopifyRecentlyViewedProps = SectionProps &
	HeadingProps &
	RecentlyViewedProps

const ShopifyRecentlyViewed: React.FC<ShopifyRecentlyViewedProps> = (props) => {
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
			<RecentlyViewed {...rest} />
		</Section>
	)
}

export default ShopifyRecentlyViewed

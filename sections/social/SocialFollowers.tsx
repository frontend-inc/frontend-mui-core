import React from 'react'
import { Section, Heading } from '../../components'
import { UserFollowers } from '../../components'
import { UserFollowersProps } from '../../components/social/follow/UserFollowers'
import { SectionProps, HeadingProps } from '../../types'

type SocialFollowersProps = SectionProps & HeadingProps & UserFollowersProps

const SocialFollowers: React.FC<SocialFollowersProps> = (props) => {
	const {
    label,
    title,
    description,
    textAlign,    
		bgcolor,
		py,
		px,
		maxWidth,
		requireAuth,
		requireTeam,
		requirePaid,
		requireAdmin,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
			bgcolor={bgcolor}
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
			<UserFollowers {...rest} />
		</Section>
	)
}

export default SocialFollowers

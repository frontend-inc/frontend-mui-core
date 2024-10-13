import React from 'react'
import { Image, Label, ExpandableText, SocialLink } from '../..'
import { Typography } from '../../../tailwind'
import { cn } from '../../../shadcn/lib/utils'

export type ProfileProps = {
	image: string
	label?: string
	title?: string
	description?: string
	socialLinks?: {
		provider: string
		url: string
	}[]
}

const Profile: React.FC<ProfileProps> = (props) => {
	const { label, title, image, description, socialLinks = [] } = props || {}

	return (
		<div className="w-full flex flex-col items-center justify-center rounded">
			<div className="w-full max-w-[600px] flex flex-col sm:flex-row items-start sm:space-x-4 space-y-4 sm:space-y-0">
				<div className="flex flex-col items-center space-y-1">
					<div className="h-[200px] w-[200px]">
						<Image alt={title} src={image} aspectRatio={1.0} />
					</div>
					<div className="flex flex-row">
						{socialLinks?.map((link, index) => (
							<div className="p-[2px]" key={index}>
								<SocialLink url={link.url} size={28} provider={link.provider} />
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col space-y-1 w-full sm:w-auto">
					<Label label={label} />
					<Typography variant="h5">{title}</Typography>
					{description && <ExpandableText text={description} />}
				</div>
			</div>
		</div>
	)
}

export default Profile

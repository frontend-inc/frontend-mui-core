'use client'

import React from 'react'
import { SocialLink, FieldString, FieldText } from '../../../components'

type ProfileInfoProps = {
	title: string
	description: string
	label?: string
	socialLinks?: {
		label: string
		value: string
		url: string
	}[]
}

const ProfileInfo: React.FC<ProfileInfoProps> = (props) => {
	const { title, description, label, socialLinks = [] } = props
	return (
		<div className="flex flex-col space-y-2">
			<div className="flex flex-col">
				<FieldString value={label} variant="caption" className="text-muted-foreground"/>
				<FieldString value={title} />
				{socialLinks?.length > 0 && (
					<div className="flex flex-row space-x-1">
						{socialLinks?.map((link, index) => (
							<SocialLink key={index} provider={link.value} url={link.url} />
						))}
					</div>
				)}
				<FieldText value={description} variant="body2" className="text-muted-foreground"/>
			</div>
		</div>
	)
}

export default ProfileInfo

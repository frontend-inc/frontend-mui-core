'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

const AdminSocialLinkForm: React.FC<ResourceFormProps> = (props) => {
	return (
		<ResourceForm
			{...props}
			fields={[
				{
					label: 'Provider',
					name: 'provider',
					variant: 'select',
					options: [
						{ label: 'Instagram', value: 'instagram' },
						{ label: 'Facebook', value: 'facebook' },
						{ label: 'Twitter', value: 'twitter' },
						{ label: 'LinkedIn', value: 'linkedin' },
						{ label: 'YouTube', value: 'youtube' },
						{ label: 'TikTok', value: 'tiktok' },
						{ label: 'WhatsApp', value: 'whatsapp' },
						{ label: 'Github', value: 'github' },
					],
				},
				{
					label: 'URL',
					name: 'url',
					variant: 'url',
					placeholder: 'Enter URL',
				},
			]}
		/>
	)
}

export default AdminSocialLinkForm

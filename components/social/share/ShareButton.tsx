'use client'

import React, { useState } from 'react'
import { useAlerts } from '../../../hooks'
import { Modal, SocialIcon } from '../..'
import { Share } from 'lucide-react'
import { Typography, IconButton } from '../../../tailwind'
import { cn } from '../../../shadcn/lib/utils'

type ShareButtonProps = {
	url: string
	size?: 'small' | 'large'
	variant?: 'rounded' | 'circular'
}

const SOCIAL_PROVIDERS = [
	{ label: 'Share to Instagram', value: 'instagram' },
	{ label: 'Share to Facebook', value: 'facebook' },
	{ label: 'Share to Twitter', value: 'twitter' },
	{ label: 'Share to LinkedIn', value: 'linkedin' },
	{ label: 'Send by Email', value: 'email' },
]

export default function ShareButton({
	url,
	variant = 'rounded',
	size = 'small',
}: ShareButtonProps) {
	const [open, setOpen] = useState(false)

	const { showAlertSuccess } = useAlerts()

	const handleClick = () => {
		setOpen(true)
	}

	const handleShareClick = (platform: string) => {
		setOpen(false)
		const shareUrl = getShareUrl(platform, url)
		if (platform === 'copy') {
			showAlertSuccess('Share link copied to clipboard')
		} else {
			window.open(shareUrl, '_blank')
		}
	}

	const getShareUrl = (platform: string, url: string) => {
		switch (platform) {
			case 'instagram':
				return `https://www.instagram.com/?url=${url}`
			case 'facebook':
				return `https://www.facebook.com/sharer/sharer.php?u=${url}`
			case 'twitter':
				return `https://twitter.com/intent/tweet?url=${url}`
			case 'pinterest':
				return `https://pinterest.com/pin/create/button/?url=${url}`
			case 'linkedin':
				return `https://www.linkedin.com/shareArticle?mini=true&url=${url}`
			case 'email':
				return `mailto:?subject=Check out this product&body=${url}`
			default:
				return ''
		}
	}

	return (
		<div>
			<IconButton
				onClick={handleClick}
				className={cn(
					variant == 'circular' ? 'rounded-full' : 'rounded-lg',
					'text-foreground',
					size === 'large' && 'border border-divider'
				)}
			>
				<Share className="w-4 h-4" />
			</IconButton>
			<Modal open={open} handleClose={() => setOpen(false)}>
				<div className="p-4">
					<div className="space-y-6">
						<div className="w-full">
							<Typography variant="subtitle1" textAlign="center">
								Share to social media
							</Typography>
							<Typography variant="body2" textAlign="center">
								Select your social media platform
							</Typography>
						</div>
						<div className="flex justify-center items-center space-x-2">
							{SOCIAL_PROVIDERS.map((provider, index) => (
								<SocialIcon
									key={index}
									provider={provider.value}
									handleClick={() => handleShareClick(provider.value)}
									size={36}
								/>
							))}
						</div>
					</div>
				</div>
			</Modal>
		</div>
	)
}

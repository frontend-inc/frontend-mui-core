'use client'

import React from 'react'
import { IconButton } from '../../../tailwind'
//@ts-ignore
import { SocialIcon as ReactSocialIcon } from 'react-social-icons'

type SocialIconProps = {
	provider: string
	url?: string
	handleClick?: () => void
	color?: string
	size?: number
}

const SocialIcon: React.FC<SocialIconProps> = (props) => {
	const { provider, handleClick, size = 20 } = props || {}
	return (
		<IconButton onClick={handleClick}>
			<ReactSocialIcon
				/* @ts-ignore */
				network={provider}
				style={{
					height: size,
					width: size,
				}}
			/>
		</IconButton>
	)
}

export default SocialIcon

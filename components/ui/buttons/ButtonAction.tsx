'use client'

import React from 'react'
import { Button } from '../../../tailwind'
import { Icon } from '../..'
import { useRouter, useParams } from 'next/navigation'

type ActionProps = {
	icon?: string
	color?: 'primary' | 'secondary'
	size?: 'small' | 'medium' | 'large'
	url?: string
	path?: string
	children: React.ReactNode
}

const ButtonAction: React.FC<ActionProps> = (props) => {
	const {
		children,
		icon,
		url,
		path,
		color = 'secondary',
		size = 'medium',
		...rest
	} = props

	const router = useRouter()

	const handleClick = () => {
		if (url) {
			window.open(url, '_blank')
		} else if (path) {
			router.push(path)
		}
	}

	return (
		<Button
			fullWidth
			size={size}
			startIcon={
				icon && (
					<Icon
						name={icon}
						color={
							color == 'primary'
								? 'primary.contrastText'
								: 'secondary.contrastText'
						}
					/>
				)
			}
			onClick={handleClick}
			color={color}
			{...rest}
		>
			{children}
		</Button>
	)
}

export default ButtonAction

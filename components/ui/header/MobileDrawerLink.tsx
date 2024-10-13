'use client'

import React from 'react'
import { Button } from '../../../tailwind'
import { MenuLinkType } from '../../..'

type MobileDrawerLinkProps = {
	menuItem: MenuLinkType
	handleClick: (path: string) => void
}

const MobileDrawerLink: React.FC<MobileDrawerLinkProps> = (props) => {
	const { menuItem, handleClick } = props

	const handleMenuClick = (menuItem) => {
		if (menuItem?.link_type == 'url') {
			window.open(menuItem.url, '_blank')
		} else {
			handleClick(menuItem.path)
		}
	}

	return (
		<Button
			fullWidth
			variant="text"
			className="justify-start"
			onClick={() => handleMenuClick(menuItem)}
		>
			{menuItem.label}
		</Button>
	)
}

export default MobileDrawerLink

'use client'

import React from 'react'
import { Button } from '../../../tailwind'
import { MenuLinkType } from '../../..'
import { Icon } from '../..'

type DesktopLinkProps = {
	menuItem: MenuLinkType
	handleClick: (path: string) => void
}

const DesktopLink: React.FC<DesktopLinkProps> = (props) => {
	const { menuItem, handleClick } = props

	const handleMenuClick = () => {
		if (menuItem?.link_type == 'url') {
			window.open(menuItem.url, '_blank')
		} else {
			handleClick(menuItem.path)
		}
	}

	return (
		<Button variant="text" onClick={handleMenuClick}>
			{menuItem.label}
		</Button>
	)
}

export default DesktopLink

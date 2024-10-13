'use client'

import React from 'react'
import ButtonMenu from './ButtonMenu'
import { ButtonType } from '../../../types'
import { UserType } from 'frontend-js'
import { MenuButton } from '../..'

type ButtonActionsProps = {
	buttons: ButtonType[]
}

const ButtonActions: React.FC<ButtonActionsProps> = (props) => {
	const { buttons = [] } = props

	if (!buttons || buttons?.length === 0) return null
	return (
		<MenuButton>
			{buttons?.map((button, index) => {
				return (
					<ButtonMenu
						key={index}
						path={button?.path}
						url={button?.url}
						label={button?.label}
						icon={button?.icon}
						onClick={button?.onClick}
					/>
				)
			})}
		</MenuButton>
	)
}

export default ButtonActions

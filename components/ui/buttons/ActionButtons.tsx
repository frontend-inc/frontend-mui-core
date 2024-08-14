import React from 'react'
import { Stack } from '@mui/material'
import ActionButton from './ActionButton'
import ActionMenuItem from './ActionMenuItem'
import { ButtonType, UserType } from '../../../types'
import { MenuButton } from '../..'

type ActionButtonsProps = {
	buttons: ButtonType[]
	resource: any
  user?: UserType
	numVisible?: number
	color?: string
	justifyContent?: 'flex-start' | 'center' | 'flex-end'
}

const ActionButtons: React.FC<ActionButtonsProps> = (props) => {
	const { color, buttons, resource, user, numVisible = 2, justifyContent } = props
	return (
		<Stack
			sx={{
				...sx.root,
				justifyContent,
			}}
			direction="row"
			spacing={0}
		>
			{buttons?.slice(0, numVisible)?.length > 0 && (
				<Stack
					sx={{
						...sx.buttons,
						justifyContent,
					}}
					direction={{ sm: 'row', xs: 'column' }}
					spacing={1}
				>
					{buttons?.slice(0, numVisible)?.map((button, index) => (
						<ActionButton 
              key={index} 
              button={button} 
              resource={resource} 
              user={user}
            />
					))}
				</Stack>
			)}
			{buttons?.length > numVisible && (
				<MenuButton color={color}>
					{buttons?.slice(numVisible, buttons.length)?.map((button, index) => (
						<ActionMenuItem 
              key={index} 
              button={button} 
              resource={resource} 
              user={user}
            />
					))}
				</MenuButton>
			)}
		</Stack>
	)
}

export default ActionButtons

const sx = {
	root: {
		justifyContent: 'space-between',
	},
	buttons: {
		width: '100%',
		justifyContent: 'flex-start',
	},
}

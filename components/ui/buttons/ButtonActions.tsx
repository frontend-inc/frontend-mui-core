import React from 'react'
import { Stack } from '@mui/material'
import ButtonAction from './ButtonAction'
import ActionMenuItem from './ActionMenuItem'
import { ButtonType, UserType } from '../../../types'
import { MenuButton } from '../..'

type ButtonActionsProps = {
	buttons: ButtonType[]
	resource: any
  user?: UserType
	numVisible?: number
	color?: string
  size?: 'small' | 'medium' | 'large'
	justifyContent?: 'flex-start' | 'center' | 'flex-end'
}

const ButtonActions: React.FC<ButtonActionsProps> = (props) => {
	const { color, buttons, resource, user, numVisible = 2, size, justifyContent } = props
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
					{buttons?.slice(0, numVisible)?.map((button, index) => {             
            let { action_type: action, path } = button
            if(action == 'navigate_user'){
              action = 'navigate'
              path  = `${path}/${user?.username}`
            }else if(action == 'navigate_cms'){
              action = 'navigate'
              path  = `${path}/${resource?.handle}`
            }
            console.log('ButtonActions', {
                label: button?.label, 
                action, 
                path
              }
            )
            return(
              <ButtonAction 
                key={index} 
                color={ button?.color }
                icon={ button?.icon }
                action={ action }
                path={ path }
                actionId={ button?.action_id }
                //@ts-ignore
                onClick={ button?.onClick }
                variant={ button?.variant || 'contained' }
                size={size}
              >
                { button?.label }
              </ButtonAction>
            )})}
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

export default ButtonActions

const sx = {
	root: {
		justifyContent: 'space-between',
	},
	buttons: {
		width: '100%',
		justifyContent: 'flex-start',
	},
}
import React from 'react'
import { IconLoading, Icon } from '../../../components'
import { Button } from '@mui/material'

export type PrimaryButtonProps = {
	color?: 'primary' | 'secondary'
	loading?: boolean
	children: React.ReactNode
	onClick: (ev: any) => void
	icon?: string
	endIcon?: string
	fullWidth?: boolean
	size?: 'small' | 'medium' | 'large'
	disabled?: boolean
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
	const {
		color = 'primary',
		loading,
		children,
		onClick,
		size = 'medium',
		icon,
		endIcon,
		fullWidth,
		disabled = false,
	} = props

	return (
		<Button
			fullWidth={fullWidth}
			color={color}
			variant="contained"
			onClick={onClick}
			disabled={disabled}
			size={size}
			endIcon={
				endIcon && (
					<Icon
						name={endIcon}
						color={
							color == 'primary'
								? 'primary.contrastText'
								: 'secondary.contrastText'
						}
					/>
				)
			}
			startIcon={
				<>
					{loading && <IconLoading loading={loading} />}
					{icon && (
						<Icon
							name={icon}
							color={
								color == 'primary'
									? 'primary.contrastText'
									: 'secondary.contrastText'
							}
						/>
					)}
				</>
			}
		>
			{children}
		</Button>
	)
}

export default PrimaryButton

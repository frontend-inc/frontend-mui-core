'use client'

import React from 'react'
import { Button } from '../../../tailwind'
import { Icon } from '../../../components'

type CellButtonProps = {
	children: string | number
	icon: string
	handleClick?: (value: any, row?: any, field?: any) => void
}

const CellButton: React.FC<CellButtonProps> = (props) => {
	const { children, icon, handleClick } = props

	return (
		<Button
			fullWidth
			size="small"
			color="secondary"
			variant="contained"
			startIcon={<Icon name={icon} />}
			onClick={handleClick && handleClick}
		>
			{children}
		</Button>
	)
}

export default CellButton

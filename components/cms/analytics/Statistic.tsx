'use client'

import React from 'react'
import { Typography } from '../../../tailwind'
import { Icon } from '../../../components'
import { Card } from '../../../shadcn/ui/card'

export type StatisticProps = {
	value: number
	label: string
	icon?: any
	direction?: 'row' | 'column'
	enableBorder?: boolean
}

export const Statistic: React.FC<StatisticProps> = (props) => {
	const { value, label, icon } = props

	return (
		<Card>
			<div className="flex flex-row space-x-2 justify-start items-center">
				<div className="mr-2">
					<Icon name={icon} size={24} />
				</div>
				<div className="flex flex-col space-y-1">
					<Typography variant="subtitle1" className="font-bold tracking-tight">
						{value}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{label}
					</Typography>
				</div>
			</div>
		</Card>
	)
}

export default Statistic

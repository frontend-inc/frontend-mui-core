'use client'

import React from 'react'
import { IconButton, Tooltip } from '../../../../tailwind'
import { Icon } from '../../../../components'

type InputLabelProps = {
	label?: string
	info?: string
}

const InputLabel: React.FC<InputLabelProps> = (props) => {
	const { label, info } = props

	return (
		<div className="min-w-[100px] flex flex-row gap-2">
			{label && (
				<label className="text-sm text-bold text-foreground">{label}</label>
			)}
			{info && (
				<Tooltip title={info}>
					<IconButton>
						<Icon name="Info" size={16} className="text-muted-foreground"/>
					</IconButton>
				</Tooltip>
			)}
		</div>
	)
}

export default InputLabel

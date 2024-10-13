'use client'

import React from 'react'
import { Placeholder } from '../../../components'

type LayoutEmptyProps = {
	icon?: string
	color?: string
	title: string
	description?: string
}

const LayoutEmpty: React.FC<LayoutEmptyProps> = (props) => {
	const { icon, color, title, description } = props || {}
	return (
		<div className={'h-full min-h-[400px] w-full'}>
			<Placeholder
				icon={icon}
				color={color}
				title={title}
				description={description}
			/>
		</div>
	)
}

export default LayoutEmpty

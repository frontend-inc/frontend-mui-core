'use client'

import React from 'react'
import {
	ToolbarModal,
	ToolbarAddToListButton,
	ToolbarUpdateButton,
	ToolbarDeleteButton,
} from '../..'
import { ToolbarButtonType } from '../../../types'

type ToolbarToolbarProps = {
	buttons?: ToolbarButtonType[]
}

const ToolbarToolbar: React.FC<ToolbarToolbarProps> = (props) => {
	const { buttons = [] } = props || {}

	return (
		<ToolbarModal>
			<ToolbarAddToListButton />
			<ToolbarDeleteButton />
			{buttons?.map((button, index) => (
				<ToolbarUpdateButton
					key={index}
					icon={button?.icon}
					buttonText={button?.buttonText}
					fields={[
						{
							label: button.label,
							name: button.name,
							variant: button.variant,
						},
					]}
				/>
			))}
		</ToolbarModal>
	)
}

export default ToolbarToolbar

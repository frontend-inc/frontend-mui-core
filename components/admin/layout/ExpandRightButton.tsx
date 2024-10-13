'use client'

import React, { useContext } from 'react'
import { AdminContext } from '../../../context'
import { IconButton } from '../../../tailwind'
import { Icon } from '../../../components'

const ExpandRightButton: React.FC = () => {
	const { toggleLayoutRight } = useContext(AdminContext)

	return (
		<IconButton onClick={toggleLayoutRight}>
			<Icon name="Menu" />
		</IconButton>
	)
}

export default ExpandRightButton

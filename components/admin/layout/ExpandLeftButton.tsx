'use client'

import React, { useContext } from 'react'
import { AdminContext } from '../../../context'
import { IconButton } from '../../../tailwind'
import { Icon } from '../../../components'

const ExpandLeftButton: React.FC = () => {
	const { toggleLayoutLeft } = useContext(AdminContext)

	return (
		<IconButton onClick={toggleLayoutLeft}>
			<Icon name="Menu" />
		</IconButton>
	)
}

export default ExpandLeftButton

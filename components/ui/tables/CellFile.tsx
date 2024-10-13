'use client'

import React from 'react'
import { CellButton } from '../../../components'

type CellFileProps = {
	value: {
		url: string
	}
	handleClick: (value: any) => void
}

const CellFile: React.FC<CellFileProps> = (props) => {
	const { value, handleClick } = props
	if (!value?.url) return null
	return (
		<CellButton icon={'File'} handleClick={handleClick}>
			Attachment
		</CellButton>
	)
}

export default CellFile

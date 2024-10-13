'use client'

import React from 'react'
import { Button } from '../../../tailwind'
import { ExternalLink } from 'lucide-react'
import { truncate } from '../../../helpers'

type CellLinkProps = {
	value: string
	handleClick: () => void
}

const CellLink: React.FC<CellLinkProps> = (props) => {
	const { value, handleClick } = props
	return (
		<div className="w-full">
			{value && (
				<Button
					size="small"
					variant="contained"
					color="secondary"
					startIcon={<ExternalLink />}
					onClick={handleClick}
				>
					{truncate(value, 20)}
				</Button>
			)}
		</div>
	)
}

export default CellLink

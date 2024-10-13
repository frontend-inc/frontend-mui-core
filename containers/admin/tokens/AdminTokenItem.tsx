'use client'

import React from 'react'
import { useAlerts } from '../../../hooks'
import { Label, ResourceListItem } from '../../../components'
import copy from 'copy-to-clipboard'
import { truncate } from '../../../helpers'

type TokenItemProps = {
	resource: any
	handleEdit: (token: any) => void
	handleDelete: (token: any) => void
}

const TokenItem: React.FC<TokenItemProps> = (props) => {
	const { resource: token, handleEdit, handleDelete } = props

	const { showAlertSuccess } = useAlerts()

	const handleCopyToken = () => {
		copy(token.api_key)
		showAlertSuccess(`${token.name} API Key copied to clipboard`)
	}

	return (
		<ResourceListItem
			enableBorder
			primary={token?.name}
			secondary={truncate(token?.api_key, 20)}
			icon="Key"
			color={token?.internal ? 'bg-purple-500' : 'bg-teal-500'}
			handleClick={handleCopyToken}
			handleEdit={!token?.internal ? () => handleEdit(token) : undefined}
			handleDelete={!token?.internal ? () => handleDelete(token) : undefined}
			secondaryAction={
				<>
					<Label label={token?.admin ? 'Admin' : 'Public'} />
					{token.internal && <Label label={'system'} />}
				</>
			}
		/>
	)
}

export default TokenItem

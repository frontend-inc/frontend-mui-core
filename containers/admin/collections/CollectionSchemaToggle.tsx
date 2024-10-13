import React from 'react'
import { ButtonTabs } from '../../../components'
import { useRouter } from 'next/router'
import { RouterParams } from '../../../types'

type CollectionSchemaToggleProps = {
	tab?: number
}

const CollectionSchemaToggle: React.FC<CollectionSchemaToggleProps> = (
	props
) => {
	const router = useRouter()
	const { app_id: appId, collection_id: collectionId } =
		router?.query as RouterParams

	const { tab = 'content' } = props

	const handleClick = (value) => {
		if (value == 'content') {
			router.push(`/dashboard/${appId}/collections/${collectionId}`)
			return
		} else {
			router.push(`/dashboard/${appId}/schema/${collectionId}`)
			return
		}
	}

	return (
		<ButtonTabs
			options={[
				{ label: 'Content', value: 'content', icon: 'Database' },
				{ label: 'Fields', value: 'fields', icon: 'Type' },
			]}
			handleChange={handleClick}
			value={tab}
		/>
	)
}

export default CollectionSchemaToggle

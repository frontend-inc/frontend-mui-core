'use client'

import React from 'react'
import { useRouter, useParams } from 'next/navigation'

type UseNavigationProps = {
	url: string
}

const useNavigation = (props: UseNavigationProps) => {
	const { url } = props
	const router = useRouter()

	const handleShowClick = (resource) => router.push(`${url}/${resource.id}`)
	const handleEditClick = (resource) =>
		router.push(`${url}/${resource.id}/edit`)
	const handleAddClick = () => router.push(`${url}/new`)

	return {
		handleClick: handleShowClick,
		handleShowClick,
		handleEditClick,
		handleAddClick,

		toShow: handleShowClick,
		toEdit: handleEditClick,
		toAdd: handleAddClick,
	}
}

export default useNavigation

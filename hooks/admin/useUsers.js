'use client'

import React from 'react'
import { useResource } from 'frontend-js'
import { useAdmin } from '../../hooks'

const useUsers = () => {
	const { apiUrl } = useAdmin()

	const {
		loading,
		loaded,
		empty,
		editing,
		isValid,
		resource: user,
		resources: users,
		setResource: setUser,
		findOne: findUser,
		findMany: findUsers,
		update: updateUser,
		create: createUser,
		save: saveUser,
		destroy: deleteUser,
		handleChange,
		handleChangePage,
		query,
		page,
		numPages,
		perPage,
		totalCount,
		sortBy,
		sortDirection,
		handleSort,
		loadingWrapper,
	} = useResource({
		url: `${apiUrl}/users`,
		name: 'user',
	})

	const inviteUser = async (user) => {
		return await loadingWrapper(() => api.post(`${apiUrl}/users/invite`, user))
	}

	return {
		loading,
		loaded,
		empty,
		editing,
		isValid,
		user,
		users,
		setUser,
		findUser,
		findUsers,
		saveUser,
		updateUser,
		createUser,
		deleteUser,
		inviteUser,
		handleChange,
		handleChangePage,
		query,
		page,
		numPages,
		perPage,
		totalCount,
		sortBy,
		sortDirection,
		handleSort,
	}
}

export default useUsers

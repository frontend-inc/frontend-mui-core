'use client'

import React from 'react'
import { useResource } from 'frontend-js'
import { useAdmin } from '../../hooks'

const useAccounts = () => {
	const { apiUrl } = useAdmin()

	const {
		resourceId: accountId,
		loading,
		loaded,
		empty,
		editing,
		isValid,
		resource: account,
		resources: accounts,
		setResource: setAccount,
		findOne: findAccount,
		findMany: findAccounts,
		update: updateAccount,
		create: createAccount,
		save: saveAccount,
		destroy: deleteAccount,
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
	} = useResource({
		url: `${apiUrl}/accounts`,
		name: 'account',
	})

	return {
		accountId,
		loading,
		loaded,
		empty,
		editing,
		isValid,
		account,
		accounts,
		setAccount,
		findAccount,
		findAccounts,
		saveAccount,
		updateAccount,
		createAccount,
		deleteAccount,
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

export default useAccounts

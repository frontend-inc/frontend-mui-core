'use client'

import React, { useState, useContext } from 'react'
import { ApiContext, ApiQuery } from 'frontend-js'
import { useLoaders } from '..'
import { QueryParamsType } from 'frontend-js'

type UseStatisticsProps = {
	url: string
}

type DataParams = {
	field: string
	date_range: string
}

const useStatistics = (props: UseStatisticsProps) => {
	const { url } = props
	const { api } = useContext(ApiContext) as any

	const { loading, loadingWrapper } = useLoaders()

	const [data, setData] = useState<any>(null)

	const fetchData = async (query: QueryParamsType) => {
		let apiQuery = new ApiQuery()
		//@ts-ignore
		apiQuery.filter(query.filters)
		let queryUrl = apiQuery.url()
		const resp = await loadingWrapper(() =>
			api.get(`${url}/statistics`, queryUrl)
		)
		setData(resp?.data)
		return resp
	}

	return {
		loading,
		data,
		fetchData,
	}
}

export default useStatistics

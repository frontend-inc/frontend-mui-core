'use client'

import React, { useEffect } from 'react'
import { useStatistics } from '../../../hooks'
import Statistic from './Statistic'

export type StatisticsProps = {
	layout?: 'row' | 'column'
	url: string
	query?: any
	direction?: 'row' | 'column'
	metaFields: {
		icon?: any
		label: string
		value: 'total' | 'current_day' | '1_day_ago' | '7_days_ago' | '30_days_ago'
	}[]
	enableBorder?: boolean
}

const Statistics: React.FC<StatisticsProps> = (props) => {
	const {
		enableBorder,
		url,
		metaFields = [],
		direction,
		query: defaultQuery = {},
	} = props || {}

	const { loading, data, fetchData } = useStatistics({
		url,
	})

	useEffect(() => {
		if (url && defaultQuery) {
			fetchData(defaultQuery)
		}
	}, [url])

	return (
		<div className="flex flex-col space-y-2 md:flex-row md:space-x-2">
			{metaFields?.map((metaField, i) => (
				<Statistic
					key={i}
					direction={direction}
					icon={metaField?.icon}
					label={metaField?.label}
					value={data?.[metaField.value] || 0}
					enableBorder={enableBorder}
				/>
			))}
		</div>
	)
}

export default Statistics

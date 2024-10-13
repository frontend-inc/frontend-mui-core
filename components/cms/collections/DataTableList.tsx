'use client'

import React from 'react'
import { CollectionList, DataTableListItems } from '../..'
import { CollectionListProps } from '../collections/CollectionList'
import { TableHeaderType } from '../../../types'

export type DataTableListProps = CollectionListProps & {
	headers: TableHeaderType[]
}

const DataTableList: React.FC<DataTableListProps> = (props) => {
	return (
		<CollectionList {...props} list={DataTableListItems} loadMore={false} />
	)
}

export default DataTableList

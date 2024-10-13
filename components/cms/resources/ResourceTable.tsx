'use client'

import React from 'react'
import { TableHeaderType } from '../../../types'
import { ResourceList, TableList } from '../../../components'
import { ResourceListProps } from './ResourceList'

export type ResourceTableProps = ResourceListProps & {
	headers: TableHeaderType[]
}

const ResourceTable: React.FC<ResourceTableProps> = (props) => {
	return <ResourceList {...props} list={TableList} disableInfiniteLoad />
}

export default ResourceTable

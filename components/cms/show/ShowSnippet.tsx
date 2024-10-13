'use client'

import React from 'react'
import { ShowItem } from '../../../components'
import { ShowItemProps } from './ShowItem'

const ShowSnippet: React.FC<ShowItemProps> = (props) => {
	return <ShowItem {...props} style="snippet" />
}

export default ShowSnippet

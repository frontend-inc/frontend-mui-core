'use client'

import React from 'react'
import { ListCard } from '../../../components'
import { CardProps } from './Card'

const TextCard: React.FC<CardProps> = (props) => {
	return <ListCard {...props} disableImage />
}

export default TextCard

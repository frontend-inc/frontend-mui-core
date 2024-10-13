'use client'

import React from 'react'
import { ScrollArea } from '../../../shadcn/ui/scroll-area'

type AdminLayoutScrollProps = {
	children: React.ReactNode
	ref?: any
	pb?: number
}

const AdminLayoutScroll: React.FC<AdminLayoutScrollProps> = (props) => {
	const { children } = props || {}

	return <ScrollArea>{children}</ScrollArea>
}

export default AdminLayoutScroll

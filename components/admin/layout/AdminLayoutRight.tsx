'use client'

import React, { useEffect } from 'react'
import { Hidden } from '../../../tailwind'
import { useAdmin } from '../../../hooks'
import { Drawer } from '../../../components'

type AdminLayoutRightProps = {
	title?: string
	children?: React.ReactNode
}

const AdminLayoutRight: React.FC<AdminLayoutRightProps> = (props) => {
	const { children, title } = props
	const { openLayoutRight, setOpenLayoutRight } = useAdmin()

	return (
		<div>
			<Hidden smDown>
				{openLayoutRight && (
					<div className="border-l border-border w-[300px] min-w-[300px] h-screen">
						{children}
					</div>
				)}
			</Hidden>
			<Hidden smUp>
				<Drawer
					mode="editor"
					disablePadding
					title={title}
					open={openLayoutRight}
					handleClose={() => setOpenLayoutRight(false)}
				>
					{children}
				</Drawer>
			</Hidden>
		</div>
	)
}

export default AdminLayoutRight

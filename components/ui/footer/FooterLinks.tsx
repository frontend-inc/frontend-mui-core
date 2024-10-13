'use client'

import React from 'react'
import Link from 'next/link'

type FooterLinksProps = {
	menuItem: {
		label: string
		children?: Array<{
			label: string
			path: string
		}>
	}
	handleClick: (path: string) => void
}

const FooterLinks: React.FC<FooterLinksProps> = ({ menuItem, handleClick }) => {
	const { children } = menuItem || {}

	return (
		<nav className="min-w-[150px] w-full sm:w-auto">
			<h3 className="mb-2 text-sm font-semibold text-foreground">
				{menuItem?.label}
			</h3>
			<ul className="space-y-2">
				{children?.map((link, i) => (
					<li key={i}>
						<Link
							href={link.path || '#'}
							onClick={(e) => {
								e.preventDefault()
								handleClick(link.path)
							}}
							className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default FooterLinks

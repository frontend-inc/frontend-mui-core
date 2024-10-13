'use client'

import React from 'react'
import { Button } from '../../shadcn/ui/button'
import NextLink from 'next/link'
import { LinkProps } from 'next/link'
import { ReactNode, MouseEvent } from 'react'

interface LinkButtonProps {
	href: LinkProps['href']
	children: ReactNode
	onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

function Link({ href, children, onClick, ...props }: LinkButtonProps) {
	const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
		if (onClick) {
			event.preventDefault()
			onClick(event)
		}
	}

	return (
		<Button variant="link" asChild {...props}>
			<NextLink href={href} onClick={handleClick}>
				{children}
			</NextLink>
		</Button>
	)
}

export { Link }

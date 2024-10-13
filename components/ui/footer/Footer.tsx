'use client'

import React from 'react'
import { Stack } from '../../../tailwind'
import { Button } from '../../../shadcn/ui/button'
import { MenuLinkType } from '../../../types'
import { SocialLink } from '../..'
import Logo from '../header/Logo'
import { useApp } from '../../../hooks'

export type FooterProps = {
	logo?: string
	links?: MenuLinkType[]
	legalLinks?: MenuLinkType[]
	socialLinks?: {
		label: string
		provider: string
		url: string
		position: number
	}[]
	handleClick: (path: string) => void
}

const Footer: React.FC<FooterProps> = (props) => {
	const {
		logo,
		handleClick,
		links = [],
		socialLinks = [],
		legalLinks = [],
	} = props

	const { logo: appLogo } = useApp()

	const handleLogoClick = () => {
		handleClick('/')
	}

	return (
		<Stack
			className="py-2 w-full bg-background min-h-[80px]"
			spacing={1}
			direction="column"
		>
			<Stack
				spacing={6}
				className="w-full px-3 items-center justify-between border-b border-divider"
				direction="row"
			>
				<Stack className="py-6 w-full items-start" direction="row" spacing={3}>
					<div className="w-full sm:w-[160px] flex justify-start">
						<Logo
							handleClick={handleLogoClick}
							src={logo || appLogo}
							width={100}
							height={50}
						/>
					</div>
					<div className="w-full flex justify-start sm:justify-center sm:pl-3">
						<div className="flex flex-wrap flex-col sm:flex-row gap-4 sm:pl-3">
							{links?.map((menuLink, i) => (
								<Button
									className="text-foreground"
									variant="ghost"
									key={i}
									onClick={() => handleClick(menuLink?.path)}
								>
									{menuLink?.label}
								</Button>
							))}
						</div>
					</div>
					<div className="w-[100px]" />
				</Stack>
			</Stack>
			<Stack
				direction="column"
				className="w-full py-1 px-3 items-center justify-between"
				spacing={2}
			>
				<Stack direction="row" spacing={1}>
					{socialLinks
						?.sort((a, b) => a?.position - b?.position)
						?.map((link, i) => (
							<SocialLink
								key={i}
								provider={link?.provider}
								url={link?.url}
								color="common.black"
							/>
						))}
				</Stack>
				<Stack direction="row" spacing={1} className="w-full items-center">
					{legalLinks?.map((menuLink, i) => (
						<Button
							variant="link"
							key={i}
							className="text-muted-foreground"
							onClick={() => handleClick(menuLink?.path)}
						>
							{menuLink?.label}
						</Button>
					))}
				</Stack>
			</Stack>
		</Stack>
	)
}

export default Footer

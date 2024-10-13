'use client'

import React, { useContext } from 'react'
import { AdminContext } from '../../../context'
import { IconButton } from '../../../tailwind'
import { Separator } from '../../../shadcn/ui/separator'
import AdminAuthButton from './AdminAuthButton'
import AdminTabIcon from './AdminTabIcon'
import Image from 'next/image'
import { useRouter, useParams } from 'next/navigation'

type AdminTabIconsProps = {
	logo?: string
	menuItems: any[]
	handleClick: (item: any) => void
	secondaryAction?: React.ReactNode
}

export default function AdminTabIcons({
	logo,
	menuItems,
	handleClick,
	secondaryAction,
}: AdminTabIconsProps) {
	const { activeTab } = useContext(AdminContext)
	const router = useRouter()

	const handleHomeClick = () => {
		router.push('/dashboard')
	}

	const handleMyAccountClick = () => {
		router.push('/my-account')
	}

	return (
		<div className="w-full h-full flex flex-col items-center justify-between border-r border-border">
			<div className="w-full flex flex-col items-center justify-center space-y-3 pt-0">
				<div className="h-[50px] w-full flex flex-col items-center justify-center border border-bottom">
					{logo && (
						<IconButton
							className="w-full rounded-none"
							onClick={handleHomeClick}
						>
							<Image src={logo} height={24} width={24} alt="logo" />
						</IconButton>
					)}
				</div>
				{Array.isArray(menuItems) &&
					menuItems?.map((item, index) => (
						<AdminTabIcon
							key={index}
							selected={activeTab == item.id}
							icon={item.icon}
							handleClick={() => handleClick(item)}
						/>
					))}
			</div>
			<div className="flex flex-col space-y-3 pb-4 mb-2">
				{secondaryAction && (
					<>
						{secondaryAction}
						<Separator className="my-2" />
					</>
				)}
				<AdminAuthButton handleClick={handleMyAccountClick} />
			</div>
		</div>
	)
}

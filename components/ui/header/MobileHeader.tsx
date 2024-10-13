'use client'

import React from 'react'
import { CartButton, ButtonActions, Icon, AuthButton } from '../..'
import { ShopifyCartButton } from '../../shopify'
import { useApp } from '../../../hooks'
import { ButtonType, MenuLinkType } from '../../..'
import Logo from './Logo'
import { Button } from '../../../shadcn/ui/button'

type MobileHeaderProps = {
	logo: string
	logoWidth?: number
	logoHeight?: number
	links: MenuLinkType[]
	buttons: ButtonType[]
	enableAuth?: boolean
	enableShopify?: boolean
	enableStripe?: boolean
	enableNotifications?: boolean
	handleClick: (path: string) => void
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
	logo,
	logoWidth = 120,
	logoHeight = 50,
	handleClick,
	buttons,
	enableAuth = false,
	enableStripe = false,
	enableShopify = false,
}) => {
	const { setMenuOpen } = useApp()

	return (
		<div className="md:hidden w-full h-16 bg-background">
			<div className="flex justify-between items-center h-full px-4">
				<div className="flex items-center">
					<Button
						variant="ghost"
						size="icon"
						className="mr-2"
						onClick={() => setMenuOpen(true)}
					>
						<Icon name="Menu" size={24} />
					</Button>
					<Logo
						handleClick={() => handleClick('/')}
						src={logo}
						width={logoWidth}
						height={logoHeight - 20}
					/>
				</div>
				<div className="flex items-center">
					{buttons?.length > 0 && (
						<div className="mr-2">
							<ButtonActions size="small" buttons={buttons} />
						</div>
					)}
					{enableAuth && <AuthButton />}
					{enableStripe && <CartButton />}
					{enableShopify && <ShopifyCartButton />}
				</div>
			</div>
		</div>
	)
}

export default MobileHeader

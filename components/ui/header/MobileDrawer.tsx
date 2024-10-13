import React, { useContext } from 'react'
import { List, Stack, Drawer } from '../../../tailwind'
import { CartButton, AuthButton } from '../..'
import { ShopifyCartButton } from '../../shopify'
import { AppContext } from '../../../context'
import MobileDrawerLink from './MobileDrawerLink'
import { MenuLinkType } from '../../..'

type MobileDrawerProps = {
	links: MenuLinkType[]
	handleClick: (path: string) => void
	enableAuth?: boolean
	enableStripe?: boolean
	enableShopify?: boolean
}

const MobileDrawer = (props: MobileDrawerProps) => {
	const { menuOpen, setMenuOpen } = useContext(AppContext)

	const { links, handleClick, enableAuth, enableStripe, enableShopify } = props

	const handleMenuClick = (path: string) => {
		setMenuOpen(false)
		handleClick(path)
	}

	return (
		<Drawer open={menuOpen} onClose={() => setMenuOpen(false)} anchor="left">
			<div>
				<List className={'space-y-2'}>
					{links?.map((menuItem, index) => (
						<MobileDrawerLink
							key={index}
							menuItem={menuItem}
							handleClick={handleMenuClick}
						/>
					))}
				</List>
				{(enableAuth || enableShopify) && (
					<Stack direction="column" spacing={1}>
						{enableStripe && <CartButton variant="button" />}
						{enableShopify && <ShopifyCartButton variant="button" />}
						{enableAuth && (
							<div className="w-full border-t border-divider pt-1.5">
								<AuthButton showLabel />
							</div>
						)}
					</Stack>
				)}
			</div>
		</Drawer>
	)
}

export default MobileDrawer

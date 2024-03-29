import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Container, Box, Grid, Stack, Typography } from '@mui/material'
import { MenuLinkType } from '../../../types'
import FooterLinks from './FooterLinks'
import { SocialLink } from '../..'
import Logo from './Logo'
import Image from 'next/image'
import moment from 'moment'

type FooterProps = {
	menuItems?: MenuLinkType[]
	handleClick: (path: string) => void
	facebook?: string
	instagram?: string
	linkedin?: string
	twitter?: string
	youtube?: string
	tiktok?: string
}

const Footer: React.FC<FooterProps> = (props) => {
	const {
		handleClick,
		menuItems,
		facebook,
		instagram,
		linkedin,
		twitter,
		youtube,
		tiktok,
	} = props

	const { logo, name } = useContext(AppContext)

	return (
		<Stack sx={sx.root} spacing={1} direction="column">
			<Box sx={sx.container}>
				<Box sx={sx.left}>
					<Box sx={sx.logoContainer}>
						{logo && (
							<Image
								src={logo}
								alt={name}
								width={120}
								height={120}
								style={{
									objectFit: 'contain',
								}}
							/>
						)}
					</Box>
				</Box>
				<Box sx={sx.gridContainer}>
					<Box sx={sx.grid}>
						{menuItems?.map((menuItem, i) => (
							<FooterLinks
								key={i}
								menuItem={menuItem}
								handleClick={handleClick}
							/>
						))}
					</Box>
				</Box>
				<Box sx={sx.right}></Box>
			</Box>
			<Stack direction="column" spacing={1} sx={sx.footerLinks}>
				<Stack direction="row" spacing={0} sx={sx.socialUrls}>
					{facebook && <SocialLink provider="facebook" url={facebook} />}
					{instagram && <SocialLink provider="instagram" url={instagram} />}
					{linkedin && <SocialLink provider="linkedin" url={linkedin} />}
					{twitter && <SocialLink provider="twitter" url={twitter} />}
					{youtube && <SocialLink provider="youtube" url={youtube} />}
					{tiktok && <SocialLink provider="tiktok" url={tiktok} />}
				</Stack>
				<Box sx={sx.copyright}>
					<Typography variant={'body2'} color="text.secondary">
						&copy; copyright {moment().format('YYYY')} {name}
					</Typography>
				</Box>
			</Stack>
		</Stack>
	)
}

export default Footer

const sx = {
	root: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		bgcolor: 'background.default',
		borderTop: '1px solid',
		borderColor: 'divider',
	},
	logo: {
		height: 120,
		width: 120,
	},
	container: {
		width: '100%',
		display: 'flex',
		flexDirection: {
			xs: 'column',
			sm: 'row',
		},
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
	left: {
		p: 2,
		width: 240,
	},
	right: {
		p: 2,
		width: 240,
	},
	logoContainer: {
		px: 1,
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	gridContainer: {
		mt: 2,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	grid: {
		px: 2,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flexWrap: 'wrap',
	},
	copyright: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	socialUrls: {
		py: 1,
	},
	divider: {
		borderTop: '1px solid',
		borderColor: 'divider',
		width: '96%',
	},
	footerLinks: {
		px: 4,
		display: 'flex',
		direction: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		pb: 4,
	},
}

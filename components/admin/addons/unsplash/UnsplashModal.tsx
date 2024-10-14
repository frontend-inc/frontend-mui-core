'use client'

import React from 'react'
import { useAlerts } from '../../../../hooks'
import { Icon, Image, Modal } from '../../../../components'
import UnsplashLogo from './UnsplashLogo'
import { Avatar } from '../../../../shadcn/ui/avatar'
import {
	Button,
	IconButton,
	Typography,
	CircularProgress,
} from '../../../../tailwind'
import copy from 'copy-to-clipboard'
import PoweredByUnsplash from './PoweredByUnsplash'
import { useUnsplash } from '../../../../hooks'
import { UnsplashImageType } from '../../../../types'

type UnsplashViewerModalProps = {
	open: boolean
	loading: boolean
	image: UnsplashImageType
	handleUpload: (url: string, filename: string) => void
	handleClose: () => void
}

const UnsplashModal: React.FC<UnsplashViewerModalProps> = ({
	loading = false,
	open,
	image,
	handleClose,
	handleUpload,
}) => {
	const { showAlertSuccess } = useAlerts()
	const { fetchDownloadLocation } = useUnsplash()

	const handleCopyUrlClick = () => {
		copy(image?.urls?.regular)
		showAlertSuccess('Asset URL copied to clipboard')
	}

	const handleDownloadClick = async () => {
		let downloadUrl = await fetchDownloadLocation(image)
		handleUpload(downloadUrl, image?.slug)
	}

	const handleUnsplashClick = () => {
		const url =
			image?.links?.html + '?utm_source=frontend.co&utm_medium=referral'
		window.open(url, '_blank')
	}

	const handleUserClick = () => {
		let url =
			image?.user?.links?.html + '?utm_source=frontend.co&utm_medium=referral'
		window.open(url, '_blank')
	}

	return (
		<Modal
			mode="editor"
			open={open}
			loading={loading}
			handleClose={handleClose}
			title={<PoweredByUnsplash />}
			maxWidth="md"
			buttons={
				<>
					<Button
						color="secondary"
						variant="contained"
						onClick={handleUnsplashClick}
						className="flex items-center"
					>
						<UnsplashLogo />
						<Icon name="ExternalLink" className="ml-2" />
					</Button>
					<Button
						color="secondary"
						variant="contained"
						onClick={handleCopyUrlClick}
						className="flex items-center"
					>
						<Icon name="Copy" className="mr-2" />
						Copy URL
					</Button>
					<Button
						variant="contained"
						onClick={handleDownloadClick}
						className="flex items-center"
					>
						<Icon name="Download" className="mr-2 text-primary-contrast" />
						Import
					</Button>
				</>
			}
		>
			{!loading ? (
				<div className="flex flex-col w-full">
					<Image
						alt={image?.alt_description}
						src={image?.urls?.regular}
						height={520}
						className="max-h-screen max-w-full"
					/>
					<div className="px-4 py-2 w-full flex flex-row justify-between items-start">
						<div className="w-full">
							<div className="flex items-center">
								<IconButton onClick={handleUserClick} className="mr-3">
									<Avatar
                    // @ts-ignore
										src={image?.user?.profile_image?.large}
										alt={image?.user?.name}
									/>
								</IconButton>
								<div>
									<a
										href={`${image?.user?.links?.html}?utm_source=frontend.co&utm_medium=referral`}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-gray-600 hover:text-gray-900 no-underline"
									>
										{image?.user?.name}
									</a>
									<Typography variant="body2" className="text-gray-500 w-full">
										{image?.description}
									</Typography>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="p-6 flex justify-center items-center w-full">
					<CircularProgress />
				</div>
			)}
		</Modal>
	)
}

export default UnsplashModal

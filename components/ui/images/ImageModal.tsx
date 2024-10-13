'use client'

import React from 'react'
import { useAlerts } from '../../../hooks'
import { Modal } from '../../../components'
import { Button } from '../../../tailwind'
import copy from 'copy-to-clipboard'
import Image from 'next/image'

type ImageModalProps = {
	open: boolean
	image: any
	title?: string
	handleClose: () => void
}

const ImageModal: React.FC<ImageModalProps> = (props) => {
	const { open, image, title = '', handleClose } = props

	const { showAlertSuccess } = useAlerts()

	const handleCopyUrlClick = () => {
		copy(image?.url)
		showAlertSuccess('Asset URL copied to clipboard')
	}

	const handleDownloadClick = () => {
		window.open(image?.url, '_blank')
	}

	return (
		<Modal
			mode="editor"
			open={open}
			handleClose={handleClose}
			title={title}
			maxWidth="md"
			buttons={
				<>
					<Button
						color="secondary"
						variant="contained"
						onClick={handleCopyUrlClick}
					>
						Copy URL
					</Button>
					<Button variant="contained" onClick={handleDownloadClick}>
						Download
					</Button>
				</>
			}
		>
			<Image
				alt="Image"
				src={image?.url}
				height={1200}
				width={1200}
				style={{
					width: '100%',
					objectFit: 'contain',
				}}
				layout="responsive"
			/>
		</Modal>
	)
}

export default ImageModal

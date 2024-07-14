import React, { useContext } from 'react'
import { useAlerts } from '../../../hooks'
import { Modal, LightDarkMode } from '../..'
import { Box, Button } from '@mui/material'
import { Link, Download } from 'lucide-react'
import copy from 'copy-to-clipboard'

type VideoModalProps = {
	open: boolean
	src: string
	title: string
	handleClose: () => void
	enableCopy?: boolean
	enableDownload?: boolean
}

const VideoModal: React.FC<VideoModalProps> = (props) => {
	let {
		open,
		src,
		title = '',
		handleClose,
		enableCopy = false,
		enableDownload = false,
	} = props

	const { showAlertSuccess } = useAlerts()

	const handleCopyUrlClick = () => {
		copy(src)
		showAlertSuccess('Asset URL copied to clipboard')
	}

	const handleDownloadClick = () => {
		window.open(src, '_blank')
	}

	if(title.length > 0) {
    //@ts-ignore
		title = src?.split('/').pop()
	}

	return (
		<LightDarkMode mode="dark">
			<Modal
				fullScreen
				open={open}
				handleClose={handleClose}
				maxWidth="md"
				title={title}
				actions={
					<>
						{enableCopy && (
							<Button
								color="secondary"
								variant="contained"
								startIcon={<Link />}
								onClick={handleCopyUrlClick}
							>
								Copy URL
							</Button>
						)}
						{enableDownload && (
							<Button
								color="primary"
								variant="contained"
								startIcon={<Download />}
								onClick={handleDownloadClick}
							>
								Download
							</Button>
						)}
					</>
				}
			>
				<Box sx={sx.root}>
					<video src={src} controls muted autoPlay />
				</Box>
			</Modal>
		</LightDarkMode>
	)
}

export default VideoModal

const sx = {
	root: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
}

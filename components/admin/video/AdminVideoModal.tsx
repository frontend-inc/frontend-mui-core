import React from 'react'
import { useAlerts } from '../../../hooks'
import { Modal } from '../..'
import { Button } from '../../../tailwind'
import { Link, Download } from 'lucide-react'
import copy from 'copy-to-clipboard'

type VideoModalProps = {
	open: boolean
	src: string
	title?: string
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

	if (title.length > 0) {
		//@ts-ignore
		title = src?.split('/').pop()
	}

	return (
		<div className="dark">
			<Modal
				open={open}
				handleClose={handleClose}
				maxWidth="md"
				title={title}
				buttons={
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
				<div className="flex flex-row justify-center items-center w-full h-full">
					<video src={src} controls muted autoPlay />
				</div>
			</Modal>
		</div>
	)
}

export default VideoModal

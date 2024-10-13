'use client'

import React, { useState } from 'react'
import { useMedia } from '../../../hooks'
import { useAlerts } from '../../../hooks'
import MediaList from './MediaList'
import {
	Modal,
	ButtonTabs,
	MediaUploader,
	UnsplashList,
	BrandfetchInput,
} from '../../../components'
import { Button } from '../../../shadcn/ui/button'

type MediaBrowserProps = {
	open: boolean
	handleClose: () => void
	handleSubmit: (items: any[]) => void
}

const MediaBrowser: React.FC<MediaBrowserProps> = ({
	open,
	handleClose,
	handleSubmit,
}) => {
	const [tab, setTab] = useState<string>('0')
	const [selected, setSelected] = useState<any>(null)
	const [uploaded, setUploaded] = useState<any>(null)

	const { showAlertError } = useAlerts()
	const { deleteResource } = useMedia()

	const handleTabChange = (value: string) => {
		setTab(value)
	}

	const handleSelect = (resource: any) => {
		setSelected(resource)
	}

	const handleRemove = async (item: any) => {
		await deleteResource(item.id)
		setUploaded(null)
	}

	const handleComplete = async (resource: any) => {
		setUploaded(resource)
		setSelected(resource)
		setTab('0')
	}

	const handleAttach = async () => {
		if (selected) {
			handleSubmit([selected])
			handleClose()
		} else {
			showAlertError('There was an error saving the document')
		}
	}

	const OPTIONS = [
		{ label: 'Browse', value: '0' },
		{ label: 'Upload', value: '1' },
		{ label: 'Unsplash', value: '2' },
		{ label: 'Logos', value: '3' },
	]

	return (
		<Modal
			mode="editor"
			maxWidth="md"			
			open={open}
			handleClose={handleClose}
			title={'Browse Media'}
			buttons={
				<Button variant="default" onClick={handleAttach}>
					Save Media
				</Button>
			}
		>
			<div className="flex flex-col h-full">
				<div className="px-4 flex justify-center items-center">
					<div className="w-full max-w-[600px]">
						<ButtonTabs
							fullWidth
							options={OPTIONS}
							handleChange={handleTabChange}
							value={tab}
						/>
					</div>
				</div>
				<div className="p-4 min-h-[50vh]">
					{tab === '0' && (
						<MediaList
							selectedIds={[selected?.id]}
							handleSelect={handleSelect}
						/>
					)}
					{tab === '1' && <MediaUploader onComplete={handleComplete} />}
					{tab === '2' && <UnsplashList onComplete={handleComplete} />}
					{tab === '3' && <BrandfetchInput onComplete={handleComplete} />}
				</div>
			</div>
		</Modal>
	)
}

export default MediaBrowser

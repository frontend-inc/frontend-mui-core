'use client'

import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { UploadCloud, DownloadCloud } from 'lucide-react'

type DropZoneProps = {
	onDrop: (file: File, preview: any) => Promise<void>
	label?: string
	dropLabel?: string
}

const DropZone: React.FC<DropZoneProps> = ({
	onDrop,
	label = 'Upload file',
	dropLabel = 'Drop file here',
}) => {
	const [loading, setLoading] = useState(false)

	const handleOnDrop = useCallback(
		(files: File[]) => {
			const reader = new FileReader()
			const file = files[0]
			reader.onload = async (e) => {
				const preview = {
					src: e.target?.result,
					name: file.name,
					size: file.size,
					type: file.type,
				}
				setLoading(true)
				try {
					await onDrop(file, preview)
				} catch (error) {
					console.error('Error uploading file:', error)
					// You might want to add some error handling UI here
				} finally {
					setLoading(false)
				}
			}
			reader.readAsDataURL(file)
		},
		[onDrop]
	)

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop: handleOnDrop,
	})

	return (
		<div
			{...getRootProps()}
			className=" bg-background m-px p-4 flex flex-col justify-center items-center rounded border-2 border-border text-center hover:border-2 hover:border-primary hover:cursor-pointer transition-all duration-300"
		>
			<input {...getInputProps()} />
			{loading ? (
				<div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
			) : (
				<>
					{isDragActive ? (
						<DownloadCloud className="text-foreground w-5 h-5" />
					) : (
						<UploadCloud className="text-foreground w-5 h-5" />
					)}
					<p className="mt-2 text-sm text-foreground">
						{isDragActive ? dropLabel : label}
					</p>
				</>
			)}
		</div>
	)
}

export default DropZone

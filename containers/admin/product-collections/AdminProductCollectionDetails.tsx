'use client'

import React from 'react'
import { Image } from '../../../components'
import { Typography } from '../../../tailwind'
import { ProductCollectionType } from '../../../types'
import { Button } from '../../../shadcn/ui/button'

type AdminProductCollectionCoverProps = {
	productCollection: ProductCollectionType
	handleEdit: () => void
}

const AdminProductCollectionDetails: React.FC<
	AdminProductCollectionCoverProps
> = (props) => {
	const { productCollection, handleEdit } = props || {}
	return (
		<div className="bg-white/5 p-4 rounded-lg shadow">
			<div className="flex flex-row justify-between items-start w-full">
				<div className="flex flex-row space-x-4">
					<div className="w-24 h-24">
						<Image
							aspectRatio={1.0}
							src={productCollection?.image?.url}
							alt={productCollection?.title}
							width={96}
							height={96}
						/>
					</div>
					<div className="flex flex-col">
						<Typography variant="subtitle1" color="text.primary">
							{productCollection?.title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{productCollection?.description}
						</Typography>
					</div>
				</div>
				<div>
					<Button onClick={handleEdit}>Edit</Button>
				</div>
			</div>
		</div>
	)
}

export default AdminProductCollectionDetails

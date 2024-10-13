import React from 'react'
import { Image, Icon } from '../../../components'
import { ImageType } from '../../../types'
import { Button } from '../../../shadcn/ui/button'
import { Card, CardContent } from '../../../shadcn/ui/card'

type MediaImageProps = {
	image: ImageType
	objectFit?: 'cover' | 'contain'
	handleRemove: () => void
}

const MediaImage: React.FC<MediaImageProps> = ({
	image,
	objectFit = 'cover',
	handleRemove,
}) => {
	return (
		<Card className="relative h-40 p-0 rounded border border-border bg-background">
			<CardContent className="p-0 h-full">
				<Image
					disableBorderRadius
					height={160}
					src={image?.url}
					alt={'media'}
					objectFit={objectFit}
					className="w-full h-full"
				/>
				{image?.url && (
					<Button
						variant="secondary"
						size="icon"
						className="absolute top-1 right-1 opacity-50 hover:opacity-100 bg-background text-foreground"
						onClick={handleRemove}
					>
						<Icon name="X" className="h-4 w-4" />
					</Button>
				)}
			</CardContent>
		</Card>
	)
}

export default MediaImage

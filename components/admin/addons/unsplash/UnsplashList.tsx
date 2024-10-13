import React, { useState } from 'react'
import { useUnsplash, useMedia } from '../../../../hooks'
import { SearchInput } from '../../../../components'
import UnsplashCard from './UnsplashCard'
import UnsplashModal from './UnsplashModal'
import PoweredByUnsplash from './PoweredByUnsplash'
import { SyntheticEventType, UnsplashImageType } from '../../../../types'
import { Button } from '../../../../shadcn/ui/button'
import { ChevronDown } from 'lucide-react'

type UnsplashProps = {
	onComplete?: (resp: any) => void
}

const UnsplashList: React.FC<UnsplashProps> = ({ onComplete }) => {
	const [showModal, setShowModal] = useState(false)
	const [keywords, setKeywords] = useState('')
	const [image, setImage] = useState<UnsplashImageType | {}>({})

	const { loading, uploadFromUrl } = useMedia()
	const { images, search, loadMore } = useUnsplash()

	const handleUpload = async (url: string, name: string) => {
		try {
			let resp = await uploadFromUrl(url, name)
			if (onComplete) {
				onComplete(resp)
			}
		} catch (e) {
			console.error('Error uploading image:', e)
		} finally {
			setShowModal(false)
      //@ts-ignore
			setImage({})
		}
	}

	const handleChange = (ev: SyntheticEventType) => {
		setKeywords(ev.target.value)
	}

	const handleSearch = async () => {
		await search(keywords)
	}

	const handleLoadMore = async () => {
		await loadMore(keywords)
	}

	const handleImageClick = (image: UnsplashImageType) => {
		setImage(image)
		setShowModal(true)
	}

	return (
		<div className="w-full">
			<div className="space-y-4">
				<SearchInput
					name="keywords"
					value={keywords}
					placeholder="Search unsplash..."
					handleChange={handleChange}
					handleSearch={handleSearch}
				/>
				<PoweredByUnsplash />
			</div>
			<div className="mt-4 grid grid-cols-2 gap-4">
				{images?.map((image, i) => (
					<UnsplashCard key={i} image={image} handleClick={handleImageClick} />
				))}
			</div>
			{images?.length > 0 && images?.length % 10 === 0 && (
				<div className="mt-4 flex justify-center">
					<Button
						variant="outline"
						className="my-2 text-foreground"
						onClick={handleLoadMore}
					>
						Load More
						<ChevronDown className="ml-2 h-4 w-4 text-foreground" />
					</Button>
				</div>
			)}
			<UnsplashModal
				loading={loading}
				open={showModal}
				image={image}
				handleClose={() => setShowModal(false)}
				handleUpload={handleUpload}
			/>
		</div>
	)
}

export default UnsplashList

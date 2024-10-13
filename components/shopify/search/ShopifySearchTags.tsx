import React from 'react'
import { Button } from '../../../shadcn/ui/button'
import { X } from 'lucide-react'

type ShopifySearchTagsProps = {
	tags?: string[]
	handleClick: (tag: string) => void
	handleClearAll: () => void
}

const ShopifySearchTags: React.FC<ShopifySearchTagsProps> = (props) => {
	const { tags = [], handleClick, handleClearAll } = props

	if (!tags) return null

	return (
		<div className="mb-6 flex flex-row justify-start items-center gap-2 overflow-x-auto scrollbar-hide">
			{tags.map((tag, index) => (
				<div
					key={index}
					className="flex items-center px-2 py-1 rounded-full border border-gray-300 bg-white"
				>
					<span className="text-xs uppercase">{tag}</span>
					<Button
						variant="ghost"
						size="icon"
						className="ml-1 p-0 hover:bg-transparent"
						onClick={() => handleClick(tag)}
					>
						<X className="h-4 w-4 text-primary" />
					</Button>
				</div>
			))}
			<Button variant="ghost" className="text-primary" onClick={handleClearAll}>
				Clear All
			</Button>
		</div>
	)
}

export default ShopifySearchTags

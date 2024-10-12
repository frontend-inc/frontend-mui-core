import React from 'react'
import { cn } from '../../../shadcn/lib/utils'
import {
	CommentButton,
	LikeButton,
	FavoriteButton,
	ShareButton,
	ProductLikeButton,
	ProductFavoriteButton,
} from '../../../components'
import { useRouter } from 'next/router'

type SocialButtonsProps = {
	resource: any
	product?: any
	direction?: 'row' | 'column'
	enableComments?: boolean
	enableLikes?: boolean
	enableFavorites?: boolean
	enableSharing?: boolean
	enableProductLikes?: boolean
	enableProductFavorites?: boolean
	justifyContent?: 'flex-start' | 'center' | 'flex-end'
	size?: 'small' | 'large'
	color?: string
}

const SocialButtons: React.FC<SocialButtonsProps> = (props) => {
	const {
		resource,
		product,
		direction = 'row',
		enableComments,
		enableLikes,
		enableFavorites,
		enableSharing,
		enableProductLikes,
		enableProductFavorites,
		size = 'small',
		justifyContent = 'flex-start',
		color,
	} = props

	const router = useRouter()
	const currentPageUrl = router.asPath

	if (
		!enableLikes &&
		!enableFavorites &&
		!enableSharing &&
		!enableProductFavorites &&
		!enableProductLikes
	)
		return null
	return (
		<div
			className={cn(
				'flex',
				size == 'small' ? 'space-x-1' : 'space-x-2',
				direction == 'row' && 'flex-row',
				justifyContent == 'flex-start' && 'justify-start',
				justifyContent == 'center' && 'justify-center'
			)}
		>
			{enableLikes == true && <LikeButton size={size} resource={resource} />}
			{enableFavorites == true && (
				<FavoriteButton size={size} resource={resource} />
			)}

			{enableProductLikes == true && (
				<ProductLikeButton size={size} product={product} color={color} />
			)}
			{enableProductFavorites == true && (
				<ProductFavoriteButton size={size} product={product} color={color} />
			)}

			{enableComments == true && <CommentButton resource={resource} />}
			{enableSharing == true && (
				<ShareButton size={size} url={currentPageUrl} />
			)}
		</div>
	)
}

export default SocialButtons

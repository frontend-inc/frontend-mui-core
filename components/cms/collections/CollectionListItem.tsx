import React from 'react'
import {
	ListCard,
	Card,
	CoverCard,
	AvatarCard,
	ChipCard,
	TextCard,
} from '../..'
import { SecondaryFields, SocialButtons } from '../..'
import { ButtonType, DisplayFieldType } from '../../../types'
import { resizeCloudinaryImage } from '../../../helpers'

type CardStyleTypes = 'list' | 'avatar' | 'card' | 'cover' | 'text'

type CollectionListItemProps = {
	buttons: ButtonType[]
	style: CardStyleTypes
	displayFields: DisplayFieldType[]
	resource: any
	buttonText?: string
	href?: string
	handleClick: () => void
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	enableComments?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
}

const CollectionListItem: React.FC<CollectionListItemProps> = (props) => {
	const {
		buttons,
		resource,
		displayFields = [],
		href,
		handleClick,
		enableGradient = false,
		enableOverlay = false,
		enableComments = false,
		enableFavorites = false,
		enableLikes = false,
		style = 'card',
		...rest
	} = props

	const COMPONENTS = {
		card: Card,
		avatar: AvatarCard,
		cover: CoverCard,
		chip: ChipCard,
		text: TextCard,
		list: ListCard,
	}

	let Component = COMPONENTS[style] || Card

	return (
		<Component
			label={resource?.label}
			image={resource?.image?.url}
			primary={resource?.title}
			handleClick={handleClick}
      // @ts-ignore
			secondary={
        <SecondaryFields fields={displayFields} resource={resource} />
      }
			actions={
				<SocialButtons
					size="small"
					justifyContent="flex-start"
					resource={resource}
					enableLikes={enableLikes}
					enableFavorites={enableFavorites}
					enableComments={enableComments}
				/>
			}
			slots={{
				image: {
					enableGradient,
					enableOverlay,
				},
			}}
		/>
	)
}

export default CollectionListItem

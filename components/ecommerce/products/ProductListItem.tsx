import React from 'react'
import {
	ListCard,
	Card,
	CoverCard,
	AvatarCard,
	ChipCard,
	TextCard,
} from '../..'
import { useResourceContext } from 'frontend-js'
import { SecondaryFields, SocialButtons, ButtonActions } from '../..'
import { ButtonType, DisplayFieldType } from '../../../types'
import { Box } from '@mui/material'
import { buildActions } from '../../../helpers'

type CardStyleTypes = 'list' | 'card' 

type ProductListItemProps = {
	selectable?: boolean
	buttons: ButtonType[]
	style: CardStyleTypes
	displayFields: DisplayFieldType[]
	resource: any 
	buttonText?: string
	href?: string
	handleClick: () => void
	handleEdit?: (item: any) => void
	handleDelete?: (item: any) => void
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	enableUsers?: boolean
	enableComments?: boolean
	enableFavorites?: boolean
	enableAddToList?: boolean
	enableLikes?: boolean
	enableRatings?: boolean
}

const ProductListItem: React.FC<ProductListItemProps> = (props) => {
	const { selectedIds, handleSelect } = useResourceContext()

	const {
		selectable,
		buttons,
		resource,
		displayFields = [],
		href,
		handleClick,
		enableEdit = false,
		enableDelete = false,
		handleEdit,
		handleDelete,
		enableGradient = false,
		enableOverlay = false,
		enableFavorites = false,
		enableAddToList = false,
		enableLikes = false,
		enableRatings = false,
		enableUsers = false,
		style = 'card',
		...rest
	} = props

	const COMPONENTS = {
		card: ProductCard,
		list: ProductListCard,
	}

	let Component = COMPONENTS[style] || Card

	return (
		<Component
			label={resource?.label}
			image={resource?.image?.url}
			primary={resource?.title}
			handleClick={handleClick}
			selectable={selectable}
			selected={selectedIds?.includes(resource?.id)}
			handleSelect={() => handleSelect(resource)}
			secondary={
				<SecondaryFields
					enableRatings={enableRatings}
					enableUsers={enableUsers}
					fields={displayFields}
					resource={resource}
				/>
			}
			actions={
				<Box>
					<SocialButtons
						spacing={0}
						variant="icon"
						justifyContent="flex-start"
						resource={resource}
						enableLikes={enableLikes}
						enableFavorites={enableFavorites}
						enableComments={enableComments}
						enableAddToList={enableAddToList}
					/>
				</Box>
			}
			secondaryAction={
				<ButtonActions
					numVisible={0}
					buttons={buildActions({
						enableEdit,
						enableDelete,
						handleEdit,
						handleDelete,
						buttons,
					})}
					resource={resource}
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

export default ProductListItem

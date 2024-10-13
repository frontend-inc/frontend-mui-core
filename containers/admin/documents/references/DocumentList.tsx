'use client'

import React, { useEffect, useState } from 'react'
import { useDocuments } from '../../../../hooks'
import { useSelected } from '../../../../hooks'
import { Drawer, SearchInput } from '../../../../components'
import { Button, CircularProgress } from '../../../../tailwind'
import { ChevronDown } from 'lucide-react'
import DocumentListItem from './DocumentListItem'

type DocumentListDrawerProps = {
	open: boolean
	field: any
	appId?: string // router type is array
	handleSubmit: (items: any[]) => void
	handleClose: () => void
	enableMultipleSelect?: boolean
}

const DocumentListDrawer: React.FC<DocumentListDrawerProps> = (props) => {
	const {
		open,
		field,
		handleSubmit,
		handleClose,
		enableMultipleSelect = false,
	} = props

	const [keywords, setKeywords] = useState('')

	const { selected, selectedIds, setSelected, handleSelect, handleClear } =
		useSelected()

	const { loading, documents, findDocuments, loadMore, page, numPages } =
		useDocuments({
			collection: field?.foreign_collection?.name,
		})

	const handleSelectClick = (document) => {
		if (enableMultipleSelect) {
			handleSelect(document)
		} else {
			setSelected([document])
		}
	}

	const handleAddClick = () => {
		handleSubmit(selected)
		setKeywords('')
		handleClear()
	}

	const handleKeywordChange = (e) => {
		setKeywords(e.target.value)
	}

	const handleSearch = () => {
		findDocuments({
			keywords: keywords,
			page: 1,
		})
	}

	const handleLoadMore = async () => {
		await loadMore()
	}

	const handleLoadDocuments = async () => {
		await findDocuments({
			page: 1,
		})
	}

	useEffect(() => {
		if (open && field) {
			handleLoadDocuments()
		}
	}, [open, field])

	return (
		<Drawer
			mode="editor"
			open={open}
			title={`Add ${field?.foreign_collection?.singular_name}`}
			handleClose={handleClose}
			buttons={
				<Button
					fullWidth
					variant="contained"
					disabled={!selected}
					onClick={handleAddClick}
				>
					Add
				</Button>
			}
		>
			<SearchInput
				name="keywords"
				handleChange={handleKeywordChange}
				value={keywords}
				handleSearch={handleSearch}
				placeholder={`Search ${field?.foreign_collection?.plural_name}...`}
			/>
			<ul>
				{documents?.map((document, idx) => (
					<DocumentListItem
						key={idx}
						document={document}
						selected={selectedIds.includes(document?.id)}
						handleClick={() => handleSelectClick(document)}
					/>
				))}
			</ul>
			{numPages > page && (
				<Button
					fullWidth
					onClick={handleLoadMore}
					endIcon={
						loading ? (
							<CircularProgress />
						) : (
							<ChevronDown className="w-5 h-5 text-foreground" />
						)
					}
				>
					Load More
				</Button>
			)}
		</Drawer>
	)
}

export default DocumentListDrawer

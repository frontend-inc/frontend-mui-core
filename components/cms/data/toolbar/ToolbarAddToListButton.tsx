'use client'

import React, { useState } from 'react'
import { Icon, Modal, RemoteAutosuggest } from '../../..'
import { Button } from '../../../../tailwind'
import { QueryParamsType, useResource, useResourceContext } from 'frontend-js'

export type DataAddToListProps = {
	query?: QueryParamsType
}

const DataAddToList: React.FC<DataAddToListProps> = (props) => {
	const { query = {} } = props || {}

	const [open, setOpen] = useState(false)

	const { foreignUrl, selectedIds } = useResourceContext()

	const { errors, loading, resource, handleChange, addReferences } =
		useResource({
			name: 'references',
			url: foreignUrl,
		})

	const handleAddClick = () => {
		setOpen(true)
	}

	const handleSubmit = async () => {
		if (resource?.id) {
			await addReferences(resource?.id, selectedIds)
			setOpen(false)
		}
	}

	return (
		<>
			<Button
				variant="contained"
				color="secondary"
				onClick={handleAddClick}
				startIcon={<Icon name="ListPlus" />}
			>
				Add to List
			</Button>
			<Modal
				loading={loading}
				open={open}
				handleClose={() => setOpen(false)}
				title={`Add selected (${selectedIds.length})`}
				maxWidth="sm"
				buttons={
					<Button
						fullWidth
						variant="contained"
						color="primary"
						onClick={handleSubmit}
						startIcon={<Icon name="Plus" color="primary.contrastText" />}
					>
						Add
					</Button>
				}
			>
				<RemoteAutosuggest
					errors={errors}
					name={'id'}
					label="Select"
					value={resource?.id}
					displayField="title"
					direction="column"
					url={foreignUrl}
					placeholder={'Select'}
					handleChange={handleChange}
					defaultQuery={query}
				/>
			</Modal>
		</>
	)
}

export default DataAddToList

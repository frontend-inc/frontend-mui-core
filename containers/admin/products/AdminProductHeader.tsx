'use client'

import React, { useState } from 'react'
import { ResourceHeader } from '../../../components'
import { ResourceHeaderProps } from '../../../components/cms/resources/ResourceHeader'
import { useProducts } from '../../../hooks'
import { Form, Modal, Icon } from '../../../components'
import { IconButton } from '../../../tailwind'

type AdminProductHeaderProps = ResourceHeaderProps

const AdminProductHeader: React.FC<AdminProductHeaderProps> = (props) => {
	const { handleReload } = props || {}

	const { loading, aiGenerate } = useProducts()

	const [open, setOpen] = useState(false)

	const [prompt, setPrompt] = useState({ text: '' })
	const handleChange = (ev) => {
		setPrompt({
			text: ev.target.value,
		})
	}

	const handleGenerateAiProducts = async () => {
		await aiGenerate(prompt.text)
		setOpen(false)
		if (handleReload) {
			handleReload()
		}
	}

	return (
		<ResourceHeader
			{...props}
			secondaryAction={
				<>
					<IconButton onClick={() => setOpen(true)}>
						<Icon name="Wand" />
					</IconButton>
					<Modal
						icon="Wand"
						title="Generate Products"
						loading={loading}
						open={open}
						handleClose={() => setOpen(false)}
					>
						<Form
							errors={{}}
							resource={prompt}
							handleChange={handleChange}
							fields={[
								{
									name: 'prompt',
									label: 'Describe the products to generate',
									variant: 'text',
									placeholder: '',
									default: '',
								},
							]}
							handleSubmit={handleGenerateAiProducts}
							buttonText="Generate Products"
						/>
					</Modal>
				</>
			}
		/>
	)
}

export default AdminProductHeader

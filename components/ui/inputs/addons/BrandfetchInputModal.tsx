'use client'

import React, { useState } from 'react'
import { Button, Collapse } from '../../../../tailwind'
import { Image, InputLabel, Drawer, BrandfetchInput } from '../../..'

type BrandfetchInputProps = {
	label?: string
	name: string
	value: string
	direction?: 'row' | 'column'
	handleChange: (e: any) => void
}

const BrandfetchInputModal: React.FC<BrandfetchInputProps> = (props) => {
	const { label = 'Logo', name, value, handleChange } = props || {}

	const [open, setOpen] = useState(false)

	const handleBrandChange = (storage: any) => {
		handleChange({
			target: {
				name,
				value: storage?.url,
			},
		})
		setOpen(false)
	}

	const handleDelete = () => {
		handleChange({ target: { name, value: '' } })
	}

	return (
		<>
			<div className="flex flex-row items-start">
				<InputLabel label={label} />
				<div className="flex flex-col space-y-4">
					<Collapse in={Boolean(value)}>
						<Image
							src={value}
							height={128}
							width={128}
							alt="logo"
							objectFit="contain"
						/>
					</Collapse>
					<div>
						<Button
							onClick={() => setOpen(true)}
							color="secondary"
							variant="contained"
						>
							Browse
						</Button>
					</div>
				</div>
			</div>
			<Drawer open={open} handleClose={() => setOpen(false)}>
				<BrandfetchInput onComplete={handleBrandChange} />
			</Drawer>
		</>
	)
}

export default BrandfetchInputModal

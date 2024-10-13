'use client'

import React, { useEffect, useState } from 'react'
import { Typography } from '../../../../tailwind'
import { ResourceListItem, ResourceGridItem } from '../../..'
import { AnswerType } from '../../../../types'

export type MultipleChoiceAnswerInputProps = {
	label?: string
	layout?: 'list' | 'grid'
	direction?: 'row' | 'column'
	name: string
	value?: any
	answers: AnswerType[]
	handleChange: (e: any) => void
	multiSelect?: boolean
}

const MultipleChoiceAnswerInput: React.FC<MultipleChoiceAnswerInputProps> = (
	props
) => {
	const {
		label,
		layout = 'list',
		multiSelect = true,
		name,
		value,
		handleChange,
		answers = [],
	} = props

	const [selected, setSelected] = useState(value || [])

	const handleSelect = (value) => {
		if (Array.isArray(selected) && selected.find((i) => i === value)) {
			setSelected(selected.filter((i) => i != value))
		} else {
			if (multiSelect) {
				setSelected(selected.concat(value))
			} else {
				setSelected([value])
			}
		}
	}

	useEffect(() => {
		if (Array.isArray(selected)) {
			handleChange({
				target: {
					name,
					value: selected || [],
				},
			})
		}
	}, [selected])

	return (
		<div className="flex flex-col space-y-2">
			<Typography variant="caption">{label}</Typography>
			{layout === 'list' && (
				<ul>
					{answers?.map((answer, i) => (
						<ResourceListItem
							key={i}
							enableBorder
							selected={selected?.includes(answer.value)}
							image={answer?.image?.url}
							primary={answer.title}
							secondary={answer.description}
							handleClick={() => handleSelect(answer.value)}
						/>
					))}
				</ul>
			)}
			{layout == 'grid' && (
				<div className="grid grid-col-1 sm:grid-col-2 md:grid-col-3 w-full gap-2">
					{answers?.map((answer, idx) => (
						<div key={idx}>
							<ResourceGridItem
								enableBorder
								selected={selected?.includes(answer.value)}
								image={answer?.image?.url}
								primary={answer.title}
								secondary={answer.description}
								handleClick={() => handleSelect(answer.value)}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default MultipleChoiceAnswerInput

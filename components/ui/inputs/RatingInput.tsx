'use client'

import React from 'react'
import { Rating } from '../../../tailwind'
import { InputPropsType, SyntheticEventType } from '../../../types'
import { InputLabel } from '../../../components'

type RatingInputProps = InputPropsType & {
	name?: string
	readOnly?: boolean
	disableBorder?: boolean
	label?: string
	value?: number
	info?: string
	handleChange?: (e: SyntheticEventType) => void
}

const RatingInput: React.FC<RatingInputProps> = (props) => {
	const {
		label,
		value,
		name,
		handleChange,
		disableBorder = false,
		readOnly = false,
		info,
	} = props

	const onChange = (value) => {
		handleChange({
			target: {
				name,
				value,
			},
		})
	}

	return (
		<div className="w-full flex flex-col items-start space-y-4">
			<InputLabel label={label} info={info} />
			<div
				className={`w-full text-[15px] focus-within:shadow-md ${
					!disableBorder
						? 'p-4 pb-2 bg-white rounded border border-gray-200 shadow-sm'
						: ''
				}`}
			>
				<Rating
					name={name}
					readOnly={readOnly}
					onChange={onChange}
					value={parseInt(value)}
				/>
			</div>
		</div>
	)
}

export default RatingInput

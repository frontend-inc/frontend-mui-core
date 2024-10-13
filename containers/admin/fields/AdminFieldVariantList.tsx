'use client'

import React, { useEffect, useState } from 'react'
import AdminFieldVariantItem from './AdminFieldVariantItem'
import { FIELD_VARIANTS } from '../../../constants'
import { groupBy } from '../../../helpers'
import { SearchInput } from '../../../components'
import { MenuList } from '../../../components'

type FieldVariantListProps = {
	field: any
	handleClick: (field: any) => void
}

const AdminFieldVariantList: React.FC<FieldVariantListProps> = (props) => {
	const { field, handleClick } = props

	const [visibleFields, setVisibleFields] = useState(FIELD_VARIANTS)
	const [groupedFields, setGroupedFields] = useState(
		groupBy(FIELD_VARIANTS, 'category')
	)

	const [text, setText] = useState('')

	const handleChange = (ev) => {
		const { value } = ev.target
		setText(value)
		setVisibleFields(
			FIELD_VARIANTS.filter((f) =>
				f.label.toLowerCase().includes(value.toLowerCase())
			)
		)
	}

	useEffect(() => {
		setGroupedFields(groupBy(visibleFields, 'category'))
	}, [visibleFields])

	return (
		<div>
			<div className="pb-2 px-2">
				<SearchInput
					value={text}
					placeholder="Search fields"
					handleChange={handleChange}
					handleSearch={() => null}
				/>
			</div>
			{field?.id ? (
				<div className="px-2">
					<AdminFieldVariantItem
						field={FIELD_VARIANTS?.find((f) => f.variant == field.variant)}
						handleClick={() => null}
					/>
				</div>
			) : (
				groupedFields &&
				Object.keys(groupedFields).map((key, i) => (
					<MenuList enableBorder key={i} label={key}>
						{groupedFields[key].map((fieldVariant, i) => (
							<AdminFieldVariantItem
								field={fieldVariant}
								handleClick={() => handleClick(fieldVariant)}
							/>
						))}
					</MenuList>
				))
			)}
		</div>
	)
}

export default AdminFieldVariantList

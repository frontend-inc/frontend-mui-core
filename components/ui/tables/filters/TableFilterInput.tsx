import React from 'react'
import {
	WHERE_OPTIONS,
	BOOLEAN_OPTIONS,
	BOOLEAN_FIELDS,
	DATE_FIELDS,
	STRING_FIELDS,
	SELECT_FIELDS,
	NUMBER_FIELDS,
	DATE_RANGE_OPTIONS,
	FILTER_OPERATORS,
} from '../../../../constants/index'
import { X } from 'lucide-react'
import {
	TextInput,
	SelectInput,
	Autosuggest,
	ArrayInput,
	TabsInput,
} from '../../../../components'
import { Separator } from '../../../../shadcn/ui/separator'
import { IconButton } from '../../../../tailwind'
import {
	OptionType,
	FilterOptionType,
	SyntheticEventType,
} from '../../../../types'

type FieldOption = FilterOptionType & {
	db_type: string
}

type FilterFieldProps = {
	index: number
	filter: FilterOptionType
	fieldOptions: {
    label: string 
    value: string 
  }[]
	handleChange: (e: SyntheticEventType, index: number) => void
	handleRemove: (index: number) => void
}

const FilterFieldWrapper: React.FC<FilterFieldProps> = ({
	index,
	filter,
	fieldOptions,
	handleChange,
	handleRemove,
}) => {
	let field
	let operatorOptions: { value: string, label: string }[] = []

	if (filter.field) {
		field = fieldOptions.find((f) => f.value == filter.field)
    //@ts-ignore
		operatorOptions = FILTER_OPERATORS[field?.db_type || 'integer']
	}

	return (
		<>
			<Separator />
			<div className="flex flex-row justify-start items-start">
				<div>
					<TabsInput
						name="where"
            //@ts-ignore
						options={WHERE_OPTIONS}
            value={filter?.where || 'AND'}
						handleChange={(ev) => handleChange(ev, index)}
					/>
					<div className="flex flex-col space-y-2">
						<div className="flex flex-row space-x-2">
							<SelectInput
								name="field"
								options={fieldOptions}
								placeholder="field"
								value={filter?.field || ''}
								handleChange={(ev) => handleChange(ev, index)}
							/>
							{filter?.field && (
								<SelectInput
									name="operator"
									placeholder="…"
									options={operatorOptions}
									value={filter?.operator || ''}
									handleChange={(ev) => handleChange(ev, index)}
								/>
							)}
						</div>
						{BOOLEAN_FIELDS.includes(field?.db_type) && (
							<SelectInput
								name="value"
								placeholder="true or false"
                //@ts-ignore
								options={BOOLEAN_OPTIONS}
								value={filter?.value || ''}
								handleChange={(ev) => handleChange(ev, index)}
							/>
						)}

						{DATE_FIELDS.includes(field?.variant) && (
							<>
								{['gte', 'lte'].includes(filter?.operator) ? (
									<SelectInput
										name="value"
										placeholder="date since"
                    //@ts-ignore
										options={DATE_RANGE_OPTIONS}
										value={filter?.value || ''}
										handleChange={(ev) => handleChange(ev, index)}
									/>
								) : (
									<TextInput
										type="date"
										name="value"
										placeholder="value"
										value={filter?.value || ''}
										handleChange={(ev) => handleChange(ev, index)}
									/>
								)}
							</>
						)}

						{NUMBER_FIELDS.includes(field?.variant) && (
							<>
								{['in', 'nin'].includes(filter?.operator) ? (
									<ArrayInput
										name="value"
										placeholder="values"
										value={Array.isArray(filter?.value) ? filter?.value : []}
										handleChange={(ev) => handleChange(ev, index)}
									/>
								) : (
									<TextInput
										type="number"
										name="value"
										placeholder="value"
										value={filter?.value || ''}
										handleChange={(ev) => handleChange(ev, index)}
									/>
								)}
							</>
						)}

						{STRING_FIELDS.includes(field?.variant) && (
							<TextInput
								name="value"
								placeholder="value"
								value={filter?.value || ''}
								handleChange={(ev) => handleChange(ev, index)}
							/>
						)}

						{SELECT_FIELDS.includes(field?.variant) && (
							<Autosuggest
								name="value"
								placeholder="Select..."
								options={field?.options?.map((opt) => ({
									label: opt,
									value: opt,
								}))}
								value={filter?.value || ''}
								handleChange={(ev) => handleChange(ev, index)}
							/>
						)}
					</div>
				</div>
				<div className="mt-1 pr-2">
					<IconButton onClick={() => handleRemove(index)}>
						<X className="w-5 h-5 text-foreground" />
					</IconButton>
				</div>
			</div>
		</>
	)
}

export default FilterFieldWrapper

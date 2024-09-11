import React from 'react'
import { Stack, Button } from '@mui/material'
import FormField from './FormField'
import { get } from 'lodash'
import { FormFieldType } from '../../../types'
import { IconLoading } from '../..'
import { validateFieldConditions } from '../../../helpers'

export type FormFieldsProps = {
	loading?: boolean
	errors: any
	fields: FormFieldType[]
	resource: any
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleRemove?: (name: string) => void
  handleAddAttachment?: (name: string, attachmentId: number) => void
	handleRemoveAttachment?: (name: string) => void
	handleSubmit?: () => void
	buttonText?: string
  inputOptions?: Record<string, React.FC> 
  inputParams?: Record<string, any>
}

const FormFields: React.FC<FormFieldsProps> = (props) => {
	const {
		errors,
		loading,
		fields,
		resource,
		handleChange,
		handleRemove,
    handleAddAttachment,
    handleRemoveAttachment,
    inputOptions,
    inputParams,
	} = props

	return (
		<Stack 
      spacing={1} 
      sx={{
        ...sx.root,
        ...(loading && sx.loading),
      }}
    >
			{fields?.map((field, index) => {
				if (!validateFieldConditions(field?.conditions || [], resource)) {
					return null
				}
				return (
					<FormField
						key={index}
						resource={resource}
						errors={errors}
						field={field}
						value={get(resource, field.name) || field?.default}
						//@ts-ignore
						handleChange={handleChange}
						handleRemove={handleRemove}
            handleAddAttachment={handleAddAttachment}
            handleRemoveAttachment={handleRemoveAttachment}
            inputOptions={inputOptions}
            inputParams={inputParams}
					/>
				)
			})}		
		</Stack>
	)
}

export default FormFields

const sx = {
	root: {
		width: '100%',
	},
	button: {
		mt: 2,
	},
  loading: {
    opacity: 0.5,
  }
}

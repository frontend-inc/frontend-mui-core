import React from 'react'
import { FormControl, Stack, Select, MenuItem } from '@mui/material'
import { SelectInputPropsType } from '../../..'
import { InputLabel } from '../../../components'

const SelectInput: React.FC<SelectInputPropsType> = (props) => {
	const {
		label,
		direction = 'column',
		name,
		value,
		options,
		handleChange,
		info,
	} = props

	return (
		<FormControl size="small" fullWidth variant="outlined">
			<Stack
				sx={{
					...sx.stack,
					...(direction == 'row' && sx.stackVertical),
				}}
				direction={direction}
				spacing={1}
			>
				<InputLabel label={label} info={info} />
				<Select
					sx={sx.root}
					value={value}
					name={name}
					onChange={(e) => handleChange(e)}
				>
					{options?.map((option, idx) => (
						// @ts-ignore
						<MenuItem value={option.value} key={idx}>
							{option.label}
						</MenuItem>
					))}
				</Select>
			</Stack>
		</FormControl>
	)
}

export default SelectInput

const sx = {
	root: {
		minWidth: '165px',
		height: '40px',
		border: '1px solid',
		borderColor: 'divider',
		bgcolor: 'background.default',
		'.MuiSvgIcon-root ': {
			fill: (theme) => theme.palette.text.secondary,
		},
		boxShadow: 'none',
		'.MuiOutlinedInput-notchedOutline': { border: 0 },
		'&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
			border: 0,
		},
		'&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			border: 0,
		},
		borderRadius: 1,
	},
	label: {
		mb: 0,
		minWidth: '100px',
		color: 'text.secondary',
	},
	stack: {
		width: '100%',
		alignItems: 'flex-start',
	},
	stackVertical: {
		alignItems: 'center',
	},
}

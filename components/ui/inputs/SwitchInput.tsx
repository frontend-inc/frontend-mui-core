import React from 'react'
import { Box, Switch, Typography, FormControlLabel } from '@mui/material'
import { InputPropsType } from '../../../types'
import { InputLabel } from '../../../components'

type SwitchInputProps = InputPropsType & {
	disableBorder?: boolean
}

const SwitchInput: React.FC<SwitchInputProps> = (props) => {
	const {
		name,
		value,
		disableBorder = false,
		label,
		placeholder,
		handleChange,
		info,
	} = props

	return (
		<Box sx={sx.root}>
			<InputLabel label={label} info={info} />
			<Box
				sx={{
					...sx.input,
					...(disableBorder && sx.disableBorder),
				}}
			>
				<FormControlLabel
					control={
						<Switch
							name={name}
							checked={value}
							onChange={handleChange}
							value="true"
						/>
					}
					label={
						<Typography variant="body1" color="textPrimary">
							{placeholder}
						</Typography>
					}
				/>
			</Box>
		</Box>
	)
}

export default SwitchInput

const sx = {
	root: {
		width: '100%',
	},
	input: {
		width: '100%',
		display: 'flex',
		direction: 'column',
		borderRadius: 1,
		py: '2px',
		px: 2,
		fontSize: 15,
		border: (theme) => `2px solid ${theme.palette.divider}`,
		'&:focus': {
			borderColor: 'primary.light',
		},
	},
	disableBorder: {
		border: 'none',
	},
}

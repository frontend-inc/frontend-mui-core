import React, { useEffect, useState } from 'react'
import {
	Box,
	Paper,
	Stack,
	IconButton,
	ListItem,
	ListItemIcon,
	Typography,
	InputBase,
	InputAdornment,
} from '@mui/material'
import { useError } from '../../../hooks'
import { InputLabel, Icon, ErrorText } from '../..'
import Autocomplete from '@mui/material/Autocomplete'
import { SyntheticEventType } from '../../../types'
import Image from 'next/image'

type AutocompleteOptionProps = {
	option: any
}

const AutocompleteOption: React.FC<AutocompleteOptionProps> = (props) => {
	const { option } = props
	return (
		<ListItem {...props}>
			{option?.icon && (
				<ListItemIcon sx={sx.listItemIcon}>
					<Icon name={option.icon} />
				</ListItemIcon>
			)}
			{option?.image && (
				<ListItemIcon sx={sx.listItemIcon}>
					<Image
						src={option?.image}
						alt={option?.label}
						width={32}
						height={32}
						//@ts-ignore
						style={styles.image}
					/>
				</ListItemIcon>
			)}
			<Typography variant="body1">{option.label}</Typography>
		</ListItem>
	)
}

type AutocompletePaperProps = {
	children: React.ReactNode
}

const AutocompletePaper: React.FC<AutocompletePaperProps> = (props) => {
	return <Paper {...props} elevation={10} sx={sx.paper} />
}

type AutosuggestProps = {
	loading?: boolean
	errors?: any
	value?: any
	direction?: 'row' | 'column'
	options: any[]
	label?: string
	name: string
	placeholder?: string
	multiselect?: boolean
	handleChange: (e: SyntheticEventType) => void
	handleInputChange?: (value: string) => void
	handleClear?: () => void
	freeSolo?: boolean
	enableClear?: boolean
	info?: string
}

const Autosuggest: React.FC<AutosuggestProps> = (props) => {
	const {
		errors,
		value,
		direction = 'column',
		options,
		label,
		name,
		placeholder = 'Select',
		multiselect = false,
		handleChange,
		handleInputChange,
		handleClear,
		enableClear = false,
		freeSolo = false,
		info,
	} = props

	const [selected, setSelected] = useState({
		label: '',
		value: null,
	})

	const { error, clearError } = useError({
		errors,
		name,
	})

	const handleOnChange = (ev, newValue) => {
		if (error) clearError()
		setSelected(newValue)
		handleChange({
			target: {
				name: name,
				value: newValue?.value,
			},
		})
	}

	const handleInputClear = () => {
		setSelected({ label: '', value: '' })
		if (handleClear) {
			handleClear()
		}
		if (enableClear) {
			handleChange({
				target: {
					name: name,
					value: '',
				},
			})
		}
	}

	useEffect(() => {
		if (options && value && typeof value === 'object') {
			setSelected(value)
		} else if (value && options && options?.length > 0) {
			let option = options.find((option) => option.value == value)
			if (option) setSelected(option)
		}
	}, [value, options])

	if (!options) return null
	return (
		<Stack
			sx={{
				...sx.stack,
				...(direction == 'row' && sx.stackVertical),
			}}
			direction={direction}
			spacing={0.5}
		>
			<InputLabel label={label} info={info} />
			<Box sx={sx.inputContainer}>
				<Autocomplete
					freeSolo={freeSolo}
					multiple={multiselect}
					disableCloseOnSelect={multiselect}
					sx={{
						...sx.autocomplete,
						paper: sx.paper,
						option: sx.option,
						popperDisablePortal: sx.popperDisablePortal,
					}}
					value={selected}
					onChange={(event, newValue) => {
						handleOnChange(event, newValue)
					}}
					onInputChange={(event, newInputValue) => {
						handleInputChange && handleInputChange(newInputValue)
					}}
					noOptionsText="No options"
					clearOnBlur
					handleHomeEndKeys
					options={options}
					//@ts-ignore
					getOptionLabel={(option) => option?.label || ''}
					//@ts-ignore
					renderOption={(props, option) => (
						<AutocompleteOption {...props} option={option} />
					)}
					PaperComponent={AutocompletePaper}
					renderInput={(params) => (
						<InputBase
							placeholder={placeholder}
							ref={params.InputProps.ref}
							inputProps={{
								...params.inputProps,
								autoComplete: 'off',
							}}
							sx={{
								...sx.inputBase,
								//@ts-ignore
								...(error && sx.inputError),
							}}
							endAdornment={
								(enableClear || handleClear) && (
									<InputAdornment position="start" sx={sx.inputAdornment}>
										<IconButton onClick={handleInputClear} size="small">
											<Icon name="X" color="text.secondary" />
										</IconButton>
									</InputAdornment>
								)
							}
						/>
					)}
				/>
				<ErrorText error={error} />
			</Box>
		</Stack>
	)
}

export default Autosuggest

const styles = {
	image: {
		borderRadius: '4px',
		objectFit: 'cover',
		marginRight: '0px',
		height: '32px',
		width: '32px',
	},
}

const sx: any = {
	autocomplete: {
		width: '100%',
	},
	inputBase: {
		width: '100%',
		'& input': {
			'-webkit-appearance': 'none',
			'-moz-appearance': 'none',
			appearance: 'none',
			p: 1,
			height: 20,
			color: 'text.secondary',
			borderRadius: 1,
      border: '1px solid',
      borderColor: 'divider',
			fontSize: (theme) => theme.typography.body2.fontSize,
			fontFamily: (theme) => theme.typography.body2.fontFamily,
			bgcolor: 'background.paper',			
			'&:focus': {
				border: (theme) => `1px solid ${theme.palette.primary.light}`,
			},
		},
	},
	inputError: {
		'& input': {
			border: '2px solid',
			borderColor: 'error.main',
			p: 1,
			height: 20,
			borderRadius: 1,
		},
	},
	inputContainer: {
		width: '100%',
	},
	paper: {
		bgcolor: 'background.paper',
		color: 'text.primary',
		p: 0,
		my: 0,
	},
	popperDisablePortal: {
		position: 'relative',
	},
	listItemIcon: {
		minWidth: '32px',
		mr: 1,
	},
	label: {
		mb: 0,
		minWidth: '95px',
	},
	icon: {
		marginRight: '10px',
	},
	stack: {
		width: '100%',
		alignItems: 'flex-start',
	},
	stackVertical: {
		alignItems: 'center',
	},
	loaderContainer: {
		width: '41px',
		height: '41px',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	circularProgress: {
		color: 'text.secondary',
	},
	inputAdornment: {
		position: 'absolute',
		right: 0,
	},
}

import React, { useState, useEffect } from 'react'
import { Box, Stack, InputBase } from '@mui/material'
import { InputLabel, ErrorText } from '../../../components'
import { sx } from './helpers/styles'
import { useError } from '../../../hooks'
import { TextInputPropsType } from '../../../types'
import { useDebounce } from 'use-debounce'

type TextInputProps = TextInputPropsType & {
	onBlur?: () => void
	onFocus?: () => void
	disableDebounce?: boolean
}

const TextInput: React.FC<TextInputProps> = (props) => {
	const {
		label,
		type,
		name,
		margin,
		value = '',
		multiline,
		handleChange,
		rows,
		placeholder,
		disabled,
		errors,
		direction = 'column',
		styles = {},
		onBlur,
		onFocus,
		info,
		disableDebounce = false,
	} = props

	const [text, setText] = useState(value)
	const [debouncedText] = useDebounce(text, 500)

	const { error, clearError } = useError({
		errors,
		name,
	})

	const handleInputChange = (e) => {
		clearError()
		setText(e.target.value)
		if (disableDebounce) {
			handleChange(e)
		}
	}

	useEffect(() => {
		if (debouncedText) {
			handleChange({
				target: {
					name,
					value: debouncedText,
				},
			})
		}
	}, [debouncedText])

	useEffect(() => {
		if (value !== text) {
			setText(value)
		}
	}, [value])

	return (
		<>
			<Stack
				sx={{
					...sx.stack,
					...(direction == 'row' && !multiline && sx.stackVertical),
				}}
				direction={direction}
				spacing={0.5}
			>
				<InputLabel label={label} info={info} />
				<Box sx={sx.inputContainer}>
					<InputBase
						rows={rows}
						error={error ? true : false}
						sx={{
							...sx.inputBase,
							...((error && sx.inputError) || {}),
							...styles,
						}}
						multiline={multiline}
						autoComplete="off"
						fullWidth
						type={type}
						name={name}
						margin={margin}
						disabled={disabled}
						placeholder={placeholder}
						onChange={handleInputChange}
						value={text}
						onBlur={onBlur && onBlur}
						onFocus={onFocus && onFocus}
					/>
					<ErrorText error={error} />
				</Box>
			</Stack>
		</>
	)
}

export default TextInput

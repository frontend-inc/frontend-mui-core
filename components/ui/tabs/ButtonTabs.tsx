import React, { useState, useEffect } from 'react'
import { Tab, Tabs } from '@mui/material'
import { Icon } from '../..'
import { useDebounce } from 'use-debounce'

type ButtonTabsProps = {
	handleChange: (value: string | number | boolean) => void
	options: {
		icon?: string
		label?: string
		value: number | string | boolean
	}[]
	value: number | string | boolean
	disablePadding?: boolean
	disableBorder?: boolean
	iconPosition?: 'start' | 'end' | 'top' | 'bottom'
	variant?: 'fullWidth' | 'scrollable'
	size?: 'small' | 'large'
  debounceDelay?: number
  disableDebounce?: boolean
}

const ButtonTabs: React.FC<ButtonTabsProps> = (props) => {
	const {
		disablePadding = false,
		disableBorder = false,
		handleChange,
		options,
		value: initialValue,
		iconPosition = 'start',
		variant = 'fullWidth',
		size = 'large',
    debounceDelay = 500,
    disableDebounce = false
	} = props

  const [value, setValue] = useState(initialValue)
  const [debouncedValue] = useDebounce(value, debounceDelay)
	
  const handleInputChange = (
		ev: React.ChangeEvent<HTMLInputElement>,
		value: number | string
	) => {
		setValue(value)
    if(disableDebounce){
      handleChange(value)
    }
	}

  useEffect(() => {
    if(!disableDebounce){
      handleChange(debouncedValue)
    }
  }, [debouncedValue])

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

	return (
		<Tabs
			variant={variant}
			sx={{
				...sx.root,
				...(!disableBorder && sx.rootBorder),
				p: disablePadding ? 0 : '3px',
				'& .MuiTab-root': {
					height: size == 'small' ? 34 : 36,
					minWidth: size == 'small' ? 44 : 64,
				},
			}}
			value={value}
			onChange={handleInputChange}
			indicatorColor="primary"
			textColor="inherit"
		>
			{options.map((tab, i) => (
				<Tab
					key={i}
					disableRipple
					iconPosition={iconPosition}					
					label={tab.label}
					value={tab.value}
					icon={tab.icon && <Icon color="text.secondary" name={tab.icon} />}
				/>
			))}
		</Tabs>
	)
}

export default ButtonTabs

const sx = {
	root: {
		minHeight: 34,
		borderRadius: 1.5,
		bgcolor: 'background.paper',
		'& svg': {
			mx: 0.5,
		},
		'& .MuiTabs-indicator': {
			height: '100%',
			width: '100px',
			borderRadius: 1,
			borderRight: '1px solid',
			borderBottom: '1px solid',
			borderColor: 'background.default',
			bgcolor: 'secondary.light',
			zIndex: 0,
		},
		'& .MuiButtonBase-root': {
			minHeight: 34,
			minWidth: 44,
			px: 1,
			zIndex: 1,
			color: 'common.white',
		},
		'& .MuiTabs-root': {
			minHeight: 34,
			height: 34,
		},
		'& .MuiTab-root': {
			minHeight: 34,
			borderRadius: 1,
			color: 'text.secondary',
			'&.Mui-selected': {
				borderRadius: 1,
				color: 'common.white',
			},
		},
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
	},
}

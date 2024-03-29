import { alpha, lighten, darken, getContrastRatio } from '@mui/material'

export const buildMuiPalette = (palette, bgcolor) => {
	const paper = lighten(bgcolor, 0.2)

	const contrast = getContrastRatio(bgcolor, '#000000')
	const primaryText = contrast > 4.5 ? '#000000' : '#FFFFFF'
	const secondaryText = contrast > 2.5 ? '#465A6A' : '#BBBBBB' 
	const neutral = contrast > 4.5 ? '#EEEEEE' : '#222222'
	const fill = contrast > 4.5 ? '#fcfcfc' : '#111111'
	const divider = contrast > 4.5 ? darken(bgcolor, 0.1) : lighten(bgcolor, 0.2)

	let muiPalette = {
		...palette,
		background: {
			default: bgcolor,
			main: bgcolor,
			paper: paper,
			fill: fill,
		},
		divider: divider,
		text: {
			primary: primaryText,
			secondary: secondaryText,
		},
		tertiary: {
			light: lighten(neutral, 0.2),
			main: neutral,
			dark: darken(neutral, 0.2),
		},
	}

	return muiPalette
}

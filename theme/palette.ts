import * as COLORS from '@mui/material/colors'

export const palette = {
	primary: {
		main: COLORS.indigo[500],
	},
	secondary: {
		main: COLORS.grey[900],
	},
	tertiary: {
		main: COLORS.grey[200],
	},
	accent: {
		main: COLORS.grey[900],
		light: COLORS.grey[800],
		contrastText: COLORS.grey[50],
	},
	success: {
		main: COLORS.green[500],
	},
	error: {
		main: COLORS.pink[500],
	},
	warning: {
		main: COLORS.orange[500],
	},
	text: {
		primary: '#000000',
		secondary: COLORS.grey[800],
	},
	background: {
		default: '#FFFFFF',
		paper: '#FFFFFF',
		light: '#FFFFFF',
		dark: '#FFFFFF',
	},
	grey: {
		dark: '#CCCCCC',
		main: '#EEEEEE',
		light: '#FAFAFA',
	},
	active: {
		hover: '#FAFBFF',
		selected: '#007BFF',
	},
	divider: COLORS.grey[300],
}

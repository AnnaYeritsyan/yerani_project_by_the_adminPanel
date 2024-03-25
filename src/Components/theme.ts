import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
	palette: {
		primary: { main: '#6DC35E' },
	},

	breakpoints: {
		values: {
		  xs: 300, // phone
		  sm: 600, // tablets
		  md: 900, // small laptop
		  lg: 1200, // desktop
		  xl: 1536 // large screens
		}
	  }
	
})

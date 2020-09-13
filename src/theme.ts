import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
    tablet: true // adds the `tablet` breakpoint
  }
}
// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Grandstander, cursive',
    htmlFontSize: 16,
  },
  palette: {
    primary: {
      light: '#bb6bc9',
      main: '#ab47bc',
      dark: '#773183',
      contrastText: '#fff',
    },
    secondary: {
      light: '#33ab9f',
      main: '#009688',
      dark: '#00695f',
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      tablet: 768,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

export default theme

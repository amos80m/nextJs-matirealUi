import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// import 'fontsource-roboto/latin-300.css'
// import 'fontsource-roboto/latin-400.css'
// import 'fontsource-roboto/latin-500.css'
// import 'fontsource-roboto/latin-700.css'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2296f3',
    },
    secondary: {
      main: '#c70000',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: ['Roboto'],
    root: {
      color: '#fff',
    },
    colorTextSecondary: {
      color: '#fff !important',
    },
    h6: {
      fontSize: '1.1rem', // need to be 18px like in design
    },
  },
  Global: {
    MuiCardHeaderSubheader: {
      color: '#fff',
    },
    subheader: {
      color: '#fff',
    },
  },
  overrides: {
    MuiInputLabel: {
      animated: {
        color: '#292929',
        fontSize: '1.02rem',
      },
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: '1px solid #0f285f',
        },
      },
    },

    MuiInputBase: {
      underline: {
        '&:before': {
          borderBottom: `1px solid red`,
        },
      },
      input: {
        borderColor: '#0f285f',
        underline: {
          '&:before': {
            borderBottom: `1px solid red`,
          },
        },
      },
    },
  },
})

export default theme

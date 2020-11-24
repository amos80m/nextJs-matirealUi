import Head from 'next/head'
import { useRouter } from 'next/router'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles'
import theme from '../components/particles/theme'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return <>
    <Head>
    <meta charSet="utf-8" />
        <meta name="theme-color" content={'rgb(33, 37, 41)'} />
        <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <title>CYScan</title>
      </Head>
      <StylesProvider injectFirst>
            <ThemeProvider theme={router.pathname === '/' ? theme : regularTheme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
      </StylesProvider>
    </>
}

export default MyApp

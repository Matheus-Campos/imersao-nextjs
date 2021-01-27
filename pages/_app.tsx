import { FC } from 'react'
import { AppProps } from 'next/app'

import {
  createGlobalStyle,
  ThemeProvider,
  DefaultTheme
} from 'styled-components'

import { colors } from '@styles/colors'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme: DefaultTheme = {
  colors
}

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp

// import * as React from 'react'
import { AppProps } from 'next/app'
import '../styles/reset.scss'
import '../styles/globals.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App

import { AppProps } from 'next/app'
import '../styles/globals.scss'
import 'normalize.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App;

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght@8..144,151,498&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=Roboto+Flex:opsz,wdth,wght@8..144,151,498&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
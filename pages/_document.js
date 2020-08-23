import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html lang="en">
        <Head>
	  <meta name="google-site-verification" content="pRHqspliCrXCKj_H1ivjcAIVL-r9_vTwX6bDg_IIigM" />
          <link rel="stylesheet" media="print" href="static/css/print.css" />
          {this.props.styleTags}
          <style>{`
            .Page {
              padding-left: calc(100vw - 100%);
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}


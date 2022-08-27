import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <Html lang="en">
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
      </Html>
    )
  }
}


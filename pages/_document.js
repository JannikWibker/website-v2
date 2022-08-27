import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../stitches.config'

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <meta name="google-site-verification" content="pRHqspliCrXCKj_H1ivjcAIVL-r9_vTwX6bDg_IIigM" />
        <link rel="stylesheet" media="print" href="/static/css/print.css" />
        <style>{`
          .Page {
            padding-left: calc(100vw - 100%); /* dafuq? */
          }
        `}</style>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

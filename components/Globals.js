import React from 'react'
import Head from 'next/head'

// <meta property="og:image" content="https://avatars3.githubusercontent.com/u/16372321?s=400&amp;v=4">
export default ({pathname}) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
    <link rel="stylesheet" href="/static/css/grid.css" />
    <title>{(pathname.replace('/', '') || 'home') + ' - Jannik Wibker'}</title>
    <meta property="og:site_name" content="jannik.ddns.net" />
    <meta property="og:title" content={(pathname.replace('/', '') || 'home') + ' - Jannik Wibker'} />
    <meta property="og:description" content="Jannik Wibkers personal website" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:locale:alternative" content="de_DE" />
    <meta property="og:url" content={'http://jannik.ddns.net' + pathname} />
    <meta property="og:image" content='/static/favicon.ico' />
    <style>{`
      body {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Fira Sans, Droid Sans, sans-serif;
        text-rendering: geometricPrecision;
        margin: 0px;
        padding: 0px;
      }
      ::selection {
        background-color: rgba(248,28,229,0.75);
        color: white;
      }
    `}</style>
  </Head>
)

import React from 'react'
import Head from 'next/head'

const Globals = ({ pathname, color }: { pathname: string; color: 'white' | 'black' }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" type="image/x-icon" href="/static/favicon/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
    <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#000000" />
    <link rel="manifest" href="/static/favicon/manifest.json" />
    <title>{(pathname.replace('/', '') || 'home') + ' - Jannik Wibker'}</title>
    <meta name="theme-color" content={color || '#000'} />
    <meta property="og:site_name" content="jannikwibker.dev" />
    <meta property="og:title" content={(pathname.replace('/', '') || 'home') + ' - Jannik Wibker'} />
    <meta property="og:description" content="Jannik Wibkers personal website" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:locale:alternative" content="de_DE" />
    <meta property="og:url" content={'https://jannikwibker.dev' + pathname} />
    <meta property="og:image" content="/static/favicon/favicon.ico" />
    <style>{`:root {color-scheme: ${color === 'white' ? 'light' : 'dark'};}`}</style>
  </Head>
)

export default Globals

import React from 'react'
import Head from 'next/head'

export default ({pathname}) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel='shortcut icon' type='image/x-icon' href='static/favicon.ico' />
    <link rel="stylesheet" href="static/css/grid.css" />
    <style>{`
      body {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Fira Sans, Droid Sans, sans-serif;
        text-rendering: geometricPrecision;
        margin: 0px;
        padding: 0px;
      }
      ::selection {
        background-color: rgba(248,28,229,0.75);
        color: white
      }
    `}</style>
  </Head>
)

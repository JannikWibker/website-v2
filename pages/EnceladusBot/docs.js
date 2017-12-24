import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import Main from '../../components/Main.js'
import Globals from '../../components/Globals.js'

import Link from '../../components/Link.js'

const color = {
  bg: 'white',
  text: 'black'
}

const Docs = styled.div`
  background-color: ${color.bg};
  color: ${color.text};
`

const SideNav = styled.nav`
  width: 128px;
  padding: 10px;
  text-align: left;
  float: left;

  > ul {
    padding-left: 20px;
  }

  > ul > li > ul {
    padding-left: 20px;
  }

  > ul > li > ul > li > a, > ul li > a {
    text-decoration: none
  }

  > ul > li > ul > li > a:hover {
    background-color: rgba(248,28,229,0.75);
    color: white;
  }

  > ul > li > a:hover {
    background-color: rgba(248,28,229,0.75)
    color: white;
  }
`

const MainSection = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  float: left;
`

const Paragraph = styled.div`
  text-align: left;
  min-width: 200px;
  max-width: calc(100vw - 240px);

  > h3 {
    font-weight: bold;
    font-size: 18px;
  }

  > h3:hover {
    text-decoration: underline;
  }

  > p {
    font-weight: 400;
    font-size: 14px;
  }

  > code {
    display: block;
    min-width: 200px;
    font-size: 13px;
    line-height: 20px;
    border: 1px solid rgb(234, 234, 234);
    border-image: initial;
    padding: 8px;
    overflow: auto;
  }
`

const commands = {
  author: {
    headline: 'author',
    description: 'returns my name and telegram username',
    usage: '/author'
  },
  homepage: {
    headline: 'homepage',
    description: 'returns the homepage of the bot',
    usage: '/homepage'
  },
  github: {
    headline: 'github',
    description: 'returns my github profile',
    usage: '/github'
  },
  src: {
    headline: 'src',
    description: 'returns the github repo with the source code of this bot',
    usage: '/src'
  },
  qr: {
    headline: 'qr',
    description: 'create a QR code for the specified text',
    usage: '/qr http://jannik.ddns.net/enceladusbot'
  },
  md: {
    headline: 'md',
    description: 'create a pdf from the specified markdown (supports LaTeX math syntax, dot diagrams, ...; uses mume and puppeteer under the hood)',
    usage: '/md this is the **sum** for calculating the *left sum* for a given $f(x)$ from $0$ to $l$ and with a stepsize of $s$: $$\sum_{i=0}^{\frac{l}{s}} f(i \cdot s) \cdot s$$'
  },
  lmgtfy: {
    headline: 'lmgtfy',
    description: 'create a lmgtfy link for the specified text',
    usage: '/lmgtfy how to use let me google that for you'
  }
}

export default class EnceladusBotDocsPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Docs>
        <Globals pathname={'/EnceladusBot'} />
        <Header
          left={[{url: '/', name: 'home'}, {url: '/about', name: 'about'}, {url: '/projects', name: 'projects'}]}
          right={[{url: 'https://github.com/JannikWibker/website-v2', name: '(src)'}, {url: '/', name: 'Jannik Wibker'}]}
          color={color.bg} />
        <Main>
          <SideNav>
            <ul>
              <li><Link href="/enceladusbot">EnceladusBot/</Link></li>
              <li>
                <ul>
                  <li><a href="#Introduction">Introduction</a></li>
                  {Object.keys(commands).map(cmd =>
                    <li key={cmd}><a href={'#' + cmd}>{cmd}</a></li>
                  )}
                </ul>
              </li>
            </ul>
          </SideNav>
          <MainSection>
            <Paragraph>
              <h3 id="Introduction">Introduction</h3>
              <p></p>
            </Paragraph>
          {Object.keys(commands).map(cmd => commands[cmd]).map((cmd, i) => (
            <Paragraph key={i}>
              <h3 id={cmd.headline}>{cmd.headline}</h3>
              <p>{cmd.description}</p>
              <code>{cmd.usage}</code>
            </Paragraph>
          ))}
          </MainSection>
        </Main>
        <Footer color={color.bg} />
      </Docs>
    )
  }
}

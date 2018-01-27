import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import Main from '../../components/Main.js'
import Globals from '../../components/Globals.js'

import Sidebar from '../../components/docs/Sidebar.js'
import Paragraph from '../../components/docs/Paragraph.js'
import MainSection from '../../components/docs/Main.js'

import Link from '../../components/Link.js'

const color = {
  bg: 'white',
  text: 'black'
}

const Docs = styled.div`
  background-color: ${color.bg};
  color: ${color.text};
`

const commands = {
  author: [
    <p>returns my name and telegram username</p>,
    <code>/author</code>
  ],
  homepage: [
    <p>returns the homepage of the bot</p>,
    <code>/homepage</code>
  ],
  github: [
    <p>returns my github profile</p>,
    <code>/github</code>
  ],
  src: [
    <p>returns the github repo with the source code of this bot</p>,
    <code>/src</code>
  ],
  qr: [
    <p>create a QR code for the specified text</p>,
    <code>/qr http://jannik.ddns.net/enceladusbot</code>
  ],
  md: [
    <p>create a pdf from the specified markdown (supports LaTeX math syntax, dot diagrams, ...; uses mume and puppeteer under the hood)</p>,
    <code>{'/md this is the **sum** for calculating the *left sum* for a given $f(x)$ from $0$ to $l$ and with a stepsize of $s$: $$\\sum_{i=0}^{\\frac{l}{s}} f(i \\cdot s) \\cdot s$$'}</code>
  ],
  lmgtfy: [
    <p>create a lmgtfy link for the specified text</p>,
    <code>/lmgtfy how to use let me google that for you</code>
  ]
}

export default class EnceladusBotDocsPage extends Component {
constructor(props) {
    super(props)
  }

  render() {
    return (
      <Docs>
        <Globals pathname={'/EnceladusBot'} color={color.bg} />
        <Header
          left={[{url: '/', name: 'home'}, {url: '/about', name: 'about'}, {url: '/projects', name: 'projects'}]}
          right={[{url: 'https://github.com/JannikWibker/website-v2', name: '(src)'}, {url: '/', name: 'Jannik Wibker'}]}
          color={color.bg} />
        <Main>
          <Sidebar items={['Introduction', ...Object.keys(commands)]} headline={"EnceladusBot"} headline_link={"/enceladusbot"} />
          <MainSection>
            <Paragraph headline="Introduction">
              <p></p>
            </Paragraph>
            {Object.keys(commands).map((cmd, i) => (
              <Paragraph key={i} headline={cmd}>
                {commands[cmd].map((x, i) => <span key={i}>{x}</span>)}
              </Paragraph>
            ))}
          </MainSection>
        </Main>
        <Footer color={color.bg} />
      </Docs>
    )
  }
}

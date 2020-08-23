import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import Main from '../../components/Main.js'
import Globals from '../../components/Globals.js'

import Sidebar from '../../components/docs/Sidebar.js'
import { Paragraph, P, Code, Codeblock } from '../../components/docs/Components.js'
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

const info = {
  'enceladusbot': {
    Introduction: [
      <P>EnceladusBot is a telegram bot (@<strong><Link href="https://t.me/enceladusbot">EnceladusBot</Link></strong>)</P>
    ],
    spotify: [
      <P>Connect EnceladusBot to Spotify. This allows using play/pause to control playback (as long as you have a Spotify premium account; Spotify only allows this for premium users) and asking for the currently playing song</P>,
      <Codeblock>/spotify</Codeblock>
    ],
    spotify_logout: [
      <P>Log out of Spotify.</P>,
      <Codeblock>/spotify_logout</Codeblock>
    ],
    qr: [
      <P>create a QR code for the specified text</P>,
      <Codeblock>/qr https://docs.jannik.ml/</Codeblock>
    ],
    md: [
      <P>create a pdf from the specified markdown<br />(supports LaTeX math syntax, dot diagrams, ...; uses <a href="https://github.com/shd101wyy/mume">mume</a> (creator has also made one of the best markdown plugins for atom / vscode for which mume is the backend of) and <a href="https://github.com/googlechrome/puppeteer">puppeteer</a> under the hood)</P>,
      <Codeblock>{'/md this is the **sum** for calculating the *left sum* for a given $f(x)$ from $0$ to $l$ and with a stepsize of $s$: $$\\sum_{i=0}^{\\frac{l}{s}} f(i \\cdot s) \\cdot s$$'}</Codeblock>
    ],
    author: [
      <P>returns my name and telegram username</P>,
      <Codeblock>/author</Codeblock>
    ],
    homepage: [
      <P>returns the homepage of the bot</P>,
      <Codeblock>/homepage</Codeblock>
    ],
    github: [
      <P>returns my github profile</P>,
      <Codeblock>/github</Codeblock>
    ],
    src: [
      <P>returns the github repo with the source code of this bot</P>,
      <Codeblock>/src</Codeblock>
    ],
    lmgtfy: [
      <P>create a lmgtfy link for the specified text</P>,
      <Codeblock>/lmgtfy how to use let me google that for you</Codeblock>
    ]
  }
}

export default class EnceladusBotDocsPage extends Component {
  static async getInitialProps({ req }) {
    let obj = {}
    if(req) {
      console.log('server side')
      if(req.db) {
        req.db.fn()
        obj.secret_info = req.db.secret_info
      }
    } else {
      console.log('client side')
    }
    return obj
  }

  constructor(props) {
    super(props)
    console.log(this.props)

    this.update = this.update.bind(this)

    this.state = {
      selected: ''
    }
  }

  update(selected) {
    console.log('selected ' + selected)
    this.setState({ selected })
  }

  render() {
    return (
      <Docs className="Page>
        <Globals pathname={'/enceladusbot'} color={color.bg} />
        <Header
          left={[{url: '/', name: 'home'}, {url: '/about', name: 'about'}, {url: '/projects', name: 'projects'}]}
          right={[{url: 'https://github.com/JannikWibker/website-v2', name: '(src)'}, {url: '/', name: 'Jannik Wibker'}]}
          color={color.bg} />
        <Main>
          <Sidebar data={info} selected={this.state.selected} cb={this.update} />
          <MainSection>
            {Object.keys(info['enceladusbot']).map((cmd, i) => (
              <Paragraph key={i} headline={cmd} cb={this.update}>
                {info['enceladusbot'][cmd].map((x, i) => <span key={i}>{x}</span>)}
              </Paragraph>
            ))}
          </MainSection>
        </Main>
        <Footer color={color.bg} />
      </Docs>
    )
  }
}

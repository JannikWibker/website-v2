import React from 'react'
import { styled } from '../stitches.config'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Globals from '../components/Globals'
import Terminal from '../components/Terminal'
import TerminalInfo from '../components/TerminalInfo'
import { age } from '../utils/age'

import Page from '../components/about-page.mdx'

const color = {
  bg: 'black',
  text: 'white'
} as const

const About = styled('div', {
  '.Terminal': {
    margin: 'auto'
  }
})

const Info = styled('div', {
  maxWidth: '90vw',
  width: '450px'
})

const AboutPage = () => (
  <About className={`bg-${color.bg} text-${color.text} font-mono`}>
    <Globals pathname="/about" color={color.bg} />
    <Header
      left={[
        { url: '/', name: 'home' },
        { url: '/about', name: 'about' },
        { url: '/projects', name: 'projects' }
      ]}
      right={[
        { url: 'https://github.com/JannikWibker/website-v2', name: '(src)' },
        { url: '/', name: 'Jannik Wibker' }
      ]}
      color={color.bg}
    />
    <Main>
      <Terminal title="Terminal">
        <TerminalInfo age={age(new Date('1999/10/20'))} />
      </Terminal>
      <br />
      <Info className="info m-auto text-left">
        <Page />
      </Info>
    </Main>
    <Footer color={color.bg} />
  </About>
)

export default AboutPage

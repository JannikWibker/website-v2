import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Globals from '../components/Globals'
import Terminal from '../components/Terminal'
import TerminalInfo from '../components/TerminalInfo'
import { age } from '../utils/age'

import Page from '../content/about.mdx'

const color = {
  bg: 'black',
  text: 'white'
} as const

const AboutPage = () => (
  <div className={`Page bg-${color.bg} text-${color.text} font-mono`}>
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
    <Main className="[&>.Terminal]:m-auto">
      <Terminal title="Terminal">
        <TerminalInfo age={age(new Date('1999/10/20'))} />
      </Terminal>
      <br />
      <div className="info m-auto text-left w-[450px] max-w-[90vw]">
        <Page />
      </div>
    </Main>
    <Footer color={color.bg} />
  </div>
)

export default AboutPage

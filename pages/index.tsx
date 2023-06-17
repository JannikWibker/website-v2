import React from 'react'
import { styled } from '../stitches.config'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Globals from '../components/Globals'

const color = {
  bg: 'black',
  text: 'white'
} as const

const Index = styled('div', {
  backgroundColor: color.bg,
  color: color.text
})

const P = styled('p', {
  fontSize: '24px',
  paddingTop: '32px'
})

const IndexPage = () => (
  <Index className="Page">
    <Globals pathname="/" color={color.bg} />
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
      <P>Hi, im Jannik</P>
    </Main>
    <Footer color={color.bg} />
  </Index>
)

export default IndexPage

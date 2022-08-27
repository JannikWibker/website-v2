import React from 'react'
import { styled } from '../stitches.config'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Globals from '../components/Globals'
import Terminal from '../components/Terminal'
import TerminalInfo from '../components/TerminalInfo'
import Link from '../components/Link'

const age = (birthday, today=new Date()) => {
  const age = today.getFullYear() - birthday.getFullYear()
  const months = today.getMonth() - birthday.getMonth()
  return (months < 0 || (months === 0 && today.getDate() < birthday.getDate()))
    ? age - 1
    : age
}

const color = {
  bg: 'black',
  text: 'white'
}

const H3 = styled('h3', {
  fontSize: '14px',
  fontAlign: 'left',
  textDecoration: 'underline'
})

const H4 = styled('h4', {
  fontSize: '13px',
  fontAlign: 'left'
})

const A = styled('a', {
  color: 'unset',
  textDecoration: 'none',
  '> :hover': {
    textDecoration: 'underline',
  }
})

const P = styled('p', {
  fontSize: '13px',
  fontAlign: 'left'
})

const LI = styled('li', {
  fontSize: '12px',
  listStyleType: 'decimal',
})

const hiddenMarkdown = null

const components = {
  h3: H3, h4: H4, a: Link, p: P, li: LI
}

const markdownSource = `
### who am I?

Hi, im Jannik and like to program all kind of things

### personal info
- name: Jannik Wibker
- age: ${age(new Date('1999/10/20'))}
- location: Baden-Württemberg, Germany
- languages: english, german, (a bit of) french, (super tiny bit of) mandarin

### technical skills

#### programming languages:
- **javascript**
- **typescript**
- java
- kotlin
- c/c++
- lua
- python
- ruby
- nim
- php

#### web stuff & technologies:
- javascript
- typescript
- [react](https://reactjs.org)
- [nodejs](https://nodejs.org)
- html & css

#### qualifications that are pretty much mandatory
- linux knowledge
- mac os x knowledge
- windows knowledge
- latex
- microsoft office

### programming related interests:
- **web development**
- compiler design
- linux, window managers & scripting
- mathematics
`

const About = styled('div', {
  backgroundColor: color.bg,
  color: color.text,
  fontFamily: 'Menlo, DejaVu Sans Mono, Lucida Console, monospace, sans-serif',

  '.Terminal': {
    margin: 'auto'
  }
})

const Info = styled('div', {
  maxWidth: '90vw',
  width: '450px',
  margin: 'auto',
  textAlign: 'left'
})

const HiddenUnlessPrint = styled('div', {
  display: 'none'
})

export async function getStaticProps() {
  const source = markdownSource
  const mdx = await serialize(source)
  return { props: { mdx } }
}

const AboutPage = ({ mdx }) => (
  <About className="Page">
    <Globals pathname={'/about'} color={color.bg} />
    <Header
      left={[{url: '/', name: 'home'}, {url: '/about', name: 'about'}, {url: '/projects', name: 'projects'}]}
      right={[{url: 'https://github.com/JannikWibker/website-v2', name: '(src)'}, {url: '/', name: 'Jannik Wibker'}]}
      color={color.bg} />
    <Main>
      <Terminal title={'Terminal'}>
        <TerminalInfo age={age(new Date('1999/10/20'))} />
      </Terminal>
      <br />
      <Info className="info">
        <MDXRemote {...mdx} components={components} />
        <HiddenUnlessPrint className="hiddenUnlessPrint">{hiddenMarkdown}</HiddenUnlessPrint>
      </Info>
    </Main>
    <Footer color={color.bg} />
  </About>
)

export default AboutPage

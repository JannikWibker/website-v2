import React from 'react'
import styled from 'styled-components'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Main from '../components/Main.js'
import Globals from '../components/Globals.js'
import Terminal from '../components/Terminal.js'
import TerminalInfo from '../components/TerminalInfo.js'
import Link from '../components/Link.js'

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

const H3 = styled.h3`
  font-size: 14px;
  font-align: left;
  text-decoration: underline;
`

const H4 = styled.h4`
  font-size: 13px;
  font-align: left
`

const A = styled.a`
  color: unset;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`

const P = styled.p`
  font-size: 13px;
  font-align: left
`

const LI = styled.li`
  font-size: 12px;
  list-style-type: decimal;
`

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

const About = styled.div`
  background-color: ${color.bg};
  color: ${color.text};
  font-family: "Menlo", DejaVu Sans Mono, Lucida Console, monospace, sans-serif;

  .Terminal {
    margin: auto;
  }
`

const Info = styled.div`
  max-width: 90vw;
  width: 450px;
  margin: auto;
  text-align: left;
`

const HiddenUnlessPrint = styled.div`
  display: none;
`

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

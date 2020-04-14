import React, { Component } from 'react'
import styled from 'styled-components'
import markdown from 'markdown-in-js'

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
  font-size: 12px;
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
  font-size: 12px;
  font-align: left
`

const LI = styled.li`
  font-size: 11px;
  list-style-type: decimal;
`

const hiddenMarkdown = null

const Markdown = markdown({h3: H3, h4: H4, a: Link, p: P, li: LI})`
### who am I?

Hi, im Jannik and I program things

### personal info
- name: Jannik Wibker
- age: ${age(new Date('1999/10/20'))}
- location: North-Rhein-Westfalia, Germany
- languages: english, german, (a bit of) french

### technical skills

#### programming languages:
- **javascript**
- java
- lua
- ruby
- nim
- python
- C/C++
- php

#### web stuff & technologies:
- javascript
- [react](https://reactjs.org)
- [nodejs](https://nodejs.org)
- html & css

#### qualifications that are pretty much mandatory
- linux knowledge
- windows knowledge
- mac os x knowledge
- microsoft office 
- latex

### programming related interests:
- **web development**
- compiler design
- linux window managers & scripting
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

export default class AboutPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
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
            {Markdown}
            <HiddenUnlessPrint className="hiddenUnlessPrint">{hiddenMarkdown}</HiddenUnlessPrint>
          </Info>
        </Main>
        <Footer color={color.bg} />
      </About>
    )
  }
}

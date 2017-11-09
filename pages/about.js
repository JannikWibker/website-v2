import React, { Component } from 'react'
import styled from 'styled-components'
import Markdown from 'react-markdown'

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Main from '../components/Main.js'
import Globals from '../components/Globals.js'
import Terminal from '../components/Terminal.js'
import TerminalInfo from '../components/TerminalInfo.js'

const md_string = `
### who am I?
text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here text goes here  text goes here text goes here text goes here text goes here text goes here

### personal info
- name
- age
- location
- languages

### technical skills

#### programming languages:
- javascript
- java
- C/C++
- python
- lua

#### web stuff & technologies:
- javascript
- [nodejs](https://nodejs.org)
- [react](https://reactjs.org)
- html & css

#### programming related interests:
- web development
- compiler design
- raspberry pi's & IoT / automation
- neural networks and artificial intelligene
- blockchain technology
- mathematics

#### OS stuff:
- Linux
- OS X
- Windows

#### favourite editors & tools:
- [atom](https://atom.io)
- [nodejs](https://nodejs.org)
- [react](https://reactjs.org)
- [markdown-preview-enhanced](https://shd101wyy.github.io/markdown-preview-enhanced/) (w/ [headless chrome](https://www.npmjs.com/package/puppeteer))
- [sublime](https://www.sublimetext.com/3)
- [IntelliJ](http://www.jetbrains.com/idea/)
- [tmux](https://tmux.github.io)
- [zsh (oh-my-zsh)](http://ohmyz.sh/)

#### other:
- LaTeX
- Microsoft Office
`

const About = styled.div`
  background-color: black;
  color: white;

  .Terminal {
    margin: auto;
  }
`

const Info = styled.div`
  max-width: 90vw;
  width: 450px;
  margin: auto;
  text-align: left;
  font-family: 'Menlo';

  .markdown {
    li {
      font-family: 'Menlo';
      font-size: 11px;
      list-style-type: decimal;
    }
    h3 {
      font-family: 'Menlo';
      font-size: 14px;
      font-align: left;
      text-decoration: underline;
    }
    h4 {
      font-family: 'Menlo';
      font-size: 12px;
      font-align: left
    }
    p {
      font-family: 'Menlo';
      font-size: 12px;
      font-align: left
    }
    a {
      color: unset;
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }
`

export default class AboutPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <About>
        <Globals pathname={'/about'} />
        <Header left={[{url: '/', name: 'home'}, {url: '/about', name: 'about'}]} right={[{url: '/', name: 'Jannik Wibker'}]} />
        <Main>
          <Terminal title={'Terminal'}>
            <TerminalInfo />
          </Terminal>
          <br />
          <Info>
            <Markdown className="markdown" source={md_string} />
          </Info>
        </Main>
        <Footer />
      </About>
    )
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Main from '../components/Main.js'
import Globals from '../components/Globals.js'
import Terminal from '../components/Terminal.js'
import TerminalInfo from '../components/TerminalInfo.js'

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
`

const SmallText = styled.span`
  font-family: 'Menlo';
  font-size: 11px;
  font-align: left
`

const NormalText = styled.span`
  font-family: 'Menlo';
  font-size: 12px;
  font-align: left
`

const BigText = styled.span`
  font-family: 'Menlo';
  font-size: 14px;
  font-align: left;
  text-decoration: underline;
`

const LI = styled.li`
  font-family: 'Menlo';
  font-size: 11px;
  list-style-type: decimal;
`

const Link = styled.a`
  color: unset;
  text-decoration: none;
  :hover {
    text-decoration: underline;
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
            <BigText>personal info:</BigText><br />
            <ul>
              <LI>name: Jannik Wibker</LI>
              <LI>age: 18</LI>
              <LI>location: North-Rhein-Westphalia, Germany</LI>
              <LI>languages: German, English, French</LI>
            </ul>

            <br /><br />
            <BigText>technical skills:</BigText><br /><br />
            <NormalText>programming languages:</NormalText>
            <ul>
              <LI>javascript</LI>
              <LI>Java</LI>
              <LI>C/C++</LI>
              <LI>python</LI>
              <LI>lua</LI>
            </ul>
            <NormalText>web stuff & technologies:</NormalText>
            <ul>
              <LI>javascript</LI>
              <LI><Link href="https://nodejs.org">nodejs</Link></LI>
              <LI><Link href="https://reactjs.org/">react</Link></LI>
              <LI>html & css</LI>
            </ul>
            <NormalText>programming related interests:</NormalText>
            <ul>
              <LI>web development</LI>
              <LI>compiler design</LI>
              <LI>raspberry pi's & IoT / automation</LI>
              <LI>neural networks and artificial intelligence</LI>
              <LI>blockchain technology</LI>
              <LI>mathematics</LI>
            </ul>
            <NormalText>OS stuff:</NormalText>
            <ul>
              <LI>Windows</LI>
              <LI>Linux</LI>
              <LI>OS X</LI>
            </ul>
            <NormalText>favourite editors / tools:</NormalText>
            <ul>
              <LI><Link href="https://atom.io">atom</Link></LI>
              <LI><Link href="https://nodejs.org">nodejs</Link></LI>
              <LI><Link href="https://reactjs.org/">react</Link></LI>
              <LI><Link href="https://shd101wyy.github.io/markdown-preview-enhanced/">markdown-preview-enhanced</Link> (w/ <Link href="https://www.npmjs.com/package/puppeteer">headless chrome</Link>)</LI>
              <LI><Link href="https://www.sublimetext.com/3">sublime</Link></LI>
              <LI><Link href="http://www.jetbrains.com/idea/">IntelliJ</Link></LI>
              <LI><Link href="https://tmux.github.io">tmux</Link></LI>
              <LI><Link href="http://ohmyz.sh/">zsh (oh-my-zsh)</Link></LI>
            </ul>
            <NormalText>other:</NormalText>
            <ul>
              <LI>LaTeX</LI>
              <LI>Microsoft Office</LI>
            </ul>
          </Info>
        </Main>
        <Footer />
      </About>
    )
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import Main from '../../components/Main.js'
import Globals from '../../components/Globals.js'

import Terminal from '../../components/Terminal.js'
import TerminalAnimation from '../../components/lrms/TerminalAnimation.js'

import Sidebar from '../../components/docs/Sidebar.js'
import { Paragraph, P, Code, Codeblock, Codecomment, Tab } from '../../components/docs/Components.js'
import MainSection from '../../components/docs/Main.js'

const color = {
  bg: 'white',
  text: 'black'
}

const LRMS = styled.div`
  background-color: ${color.bg};
  color: ${color.text};
`

const info = {
  'lrms': {
    'Introduction': [
      <P>1234</P>,
    ],
    'install & run': [
      <Terminal title="zsh" fontsize={12} color="white"><TerminalAnimation /></Terminal>,
      <h4>frontend</h4>,
      <P>clone the frontend from bitbucket</P>,
      <Codeblock>git clone https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms.git rpi-frontend</Codeblock>,
      <P>start the frontend server</P>,
      <Codeblock>
        cd rpi-frontend<br />
        yarn <Tab n={10} /><Codecomment>// install dependencies</Codecomment><br />
        yarn build <Tab n={4} /><Codecomment>// build frontend</Codecomment><br />
        serve -s build <Codecomment>// start the static server</Codecomment><br />
      </Codeblock>,
      <P>incase you want to use a different port (or a different address altogether) in the backend than the default one (<Code>http://localhost:8080</Code>) create a <Code>.env</Code>-file in the root of the frontend and enter the following:</P>,
      <Codeblock>REACT_APP_BACKEND=http://&lt;ADDRESS&gt;:&lt;PORT&gt;</Codeblock>,

      <h4>backend</h4>,
      <P>clone the backend from bitbucket</P>,
      <Codeblock>git clone https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms-backend.git rpi-backend</Codeblock>,
      <P>start the backend server</P>,
      <Codeblock>
        cd rpi-backend<br />
        yarn <Tab n={8} /><Codecomment>// install dependencies</Codecomment><br />
        node main.js <Codecomment>// run the server</Codecomment><br />
      </Codeblock>,
    ]
  }
}

export default class LRMSIndexPage extends Component {
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
      <LRMS>
        <Globals pathname={'/LRMS'} color={color.bg} />
        <Header
          left={[{url: '/', name: 'home'}, {url: '/about', name: 'about'}, {url: '/projects', name: 'projects'}]}
          right={[{url: 'https://github.com/JannikWibker/website-v2', name: '(src)'}, {url: '/', name: 'Jannik Wibker'}]}
          color={color.bg} />
        <Main>
          <Sidebar data={info} selected={this.state.selected} cb={this.update} />
          <MainSection>
            {Object.keys(info['lrms']).map((cmd, i) => (
              <Paragraph key={i} headline={cmd} cb={this.update}>
                {info['lrms'][cmd].map((x, i) => <span key={i}>{x}</span>)}
              </Paragraph>
            ))}
          </MainSection>
        </Main>
        <Footer color={color.bg} />
      </LRMS>
    )
  }
}

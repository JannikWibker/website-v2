import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import Main from '../../components/Main.js'
import Globals from '../../components/Globals.js'

import Sidebar from '../../components/docs/Sidebar.js'
import { Paragraph, P, Code, Codeblock, Blockquote } from '../../components/docs/Components.js'
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
  'utils': {
    'Introduction': [
      <P>
        This is just a collection of useful utility functions that I have created over time.<br />
        They are all kind of generic and not specialized for one specific project, so they should be usable without any dependencies and do not really enforce some kind of datastructure.
      </P>
    ],
    'source': [
      <P>All of them can be found on <a href="https://github.com/JannikWibker/jannik-utils">GitHub</a>.</P>
    ],
    'documentation': [
      <P>
        complete documentation can be found on <a href="https://github.com/JannikWibker/jannik-utils">GitHub</a> or on utils' own <a href="http://jannik.ddns.net:9124/utils">site</a>.<br />
        <Blockquote>In the future it will probably be displayed here too</Blockquote>
      </P>
    ]
  }
}

export default class UtilsDocPage extends Component {
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
      <Docs>
        <Globals pathname={'/utils'} color={color.bg} />
        <Header
          left={[{url: '/', name: 'home'}, {url: '/about', name: 'about'}, {url: '/projects', name: 'projects'}]}
          right={[{url: 'https://github.com/JannikWibker/website-v2', name: '(src)'}, {url: '/', name: 'Jannik Wibker'}]}
          color={color.bg} />
        <Main>
          <Sidebar data={info} selected={this.state.selected} cb={this.update} />
          <MainSection>
            {Object.keys(info['utils']).map((cmd, i) => (
              <Paragraph key={i} headline={cmd} cb={this.update}>
                {info['utils'][cmd].map((x, i) => <span key={i}>{x}</span>)}
              </Paragraph>
            ))}
          </MainSection>
        </Main>
        <Footer color={color.bg} />
      </Docs>
    )
  }
}

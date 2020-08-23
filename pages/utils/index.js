import React, { Component } from 'react'
import styled from 'styled-components'
import Markdown from 'react-markdown'

import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import Main from '../../components/Main.js'
import Globals from '../../components/Globals.js'
import Promisable from '../../components/Promisable.js'

import Sidebar from '../../components/docs/Sidebar.js'
import { Paragraph, P, Code, Codeblock, Blockquote, H3 } from '../../components/docs/Components.js'
import MainSection from '../../components/docs/Main.js'

import isNode from '../../util/isNode.js'

import Link from '../../components/Link.js'

const color = {
  bg: 'white',
  text: 'black'
}

const Docs = styled.div`
  background-color: ${color.bg};
  color: ${color.text};

  .md {
    margin-left: 8px;
  }

  .md h2 {

    font-size: 1.17em;
  }

  .md h3 {
    font-size: 1em;
  }

  .md code {
    font-family: 'Menlo';
    margin: 0 2px 0 2px;
  }

  .md pre code {
    font-family: 'Menlo';
    display: block;
    min-width: 200px;
    font-size: 13px;
    line-height: 20px;
    border: 1px solid rgb(234, 234, 234);
    border-image: initial;
    padding: 8px;
    overflow: auto;
  }
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
      <Promisable client_only={true} promise={() => (isNode
          ? Promise.reject('server side only')
          : fetch('https://raw.githubusercontent.com/JannikWibker/jannik-utils/master/README.md') /*Promise.resolve('success')*/
            .then(x => x.text())
        )
          .then(x => (
            <Markdown className="md" source={x} />
          ))
          .catch(x => (
            <Blockquote className="reject">something went wrong: {x.toString()}</Blockquote>
          ))
      } />
    ]
  }
}

export default class UtilsDocPage extends Component {
  constructor(props) {
    super(props)

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
      <Docs className="Page">
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

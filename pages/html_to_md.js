import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Main from '../components/Main.js'
import Globals from '../components/Globals.js'

import Sidebar from '../components/docs/Sidebar.js'
import Paragraph from '../components/docs/Paragraph.js'
import MainSection from '../components/docs/Main.js'

const color = {
  bg: 'white',
  text: 'black'
}

const HtmlToMd = styled.div`
  background-color: ${color.bg};
  color: ${color.text};
`

const info = {
  'html_to_md': [
    <p>test</p>
  ]
}

export default class HtmlToMdPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <HtmlToMd>
        <Globals pathname={'/'} color={color.bg} />
        <Header
          left={[{url: '/', name: 'home'}, {url: '/about', name: 'about'}, {url: '/projects', name: 'projects'}]}
          right={[{url: 'https://github.com/JannikWibker/website-v2', name: '(src)'}, {url: '/', name: 'Jannik Wibker'}]}
          color={color.bg} />
        <Main>
          <Sidebar items={Object.keys(info)} headline={'html_to_md'} headline_link={'/html_to_md'} />
          <MainSection>
            {Object.keys(info).map((item, i) => (
              <Paragraph key={i} headline={item}>
                {info[item].map((x, i) => <span key={i}>{x}</span>)}
              </Paragraph>
            ))}
          </MainSection>
        </Main>
        <Footer color={color.bg} />
      </HtmlToMd>
    )
  }
}

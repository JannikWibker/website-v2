import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import Main from '../../components/Main.js'
import Globals from '../../components/Globals.js'

const color = {
  bg: 'white',
  text: 'black'
}

const EnceladusBot = styled.div`
  background-color: ${color.bg};
  color: ${color.text};
`

export default class EnceladusBotIndexPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <EnceladusBot>
        <Globals pathname={'/EnceladusBot'} />
        <Header
          left={[{url: '/', name: 'home'}, {url: '/about', name: 'about'}, {url: '/projects', name: 'projects'}]}
          right={[{url: 'https://github.com/JannikWibker/website-v2', name: '(src)'}, {url: '/', name: 'Jannik Wibker'}]}
          color={color.bg} />
        <Main>
          EnceladusBot
        </Main>
        <Footer color={color.bg} />
      </EnceladusBot>
    )
  }
}

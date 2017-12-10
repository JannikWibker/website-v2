import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import Main from '../../components/Main.js'
import Globals from '../../components/Globals.js'

const EnceladusBot = styled.div`
  background-color: black;
  color: white;
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
          left={[{url: '/', name: 'home'}, {url: '/about', name: 'about'}, {url: '/school_stuff', name: 'school_stuff'}]}
          right={[{url: 'https://github.com/JannikWibker/website-v2', name: '(src)'}, {url: '/', name: 'Jannik Wibker'}]} />
        <Main>
          EnceladusBot
        </Main>
        <Footer />
      </EnceladusBot>
    )
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Main from '../components/Main.js'
import Globals from '../components/Globals.js'

const color = {
  bg: 'black',
  text: 'white'
}

const Index = styled.div`
  background-color: ${color.bg};
  color: ${color.text};
`


export default class IndexPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Index>
        <Globals pathname={'/'} color={color.bg} />
        <Header
          left={[{url: '/', name: 'home'}, {url: '/about', name: 'about'}, {url: '/projects', name: 'projects'}]}
          right={[{url: 'https://github.com/JannikWibker/website-v2', name: '(src)'}, {url: '/', name: 'Jannik Wibker'}]}
          color={color.bg} />
        <Main>
          Index
        </Main>
        <Footer color={color.bg} />
      </Index>
    )
  }
}

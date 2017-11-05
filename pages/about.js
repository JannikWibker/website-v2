import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Main from '../components/Main.js'
import Globals from '../components/Globals.js'

const Blog = styled.div`
  background-color: black;
  color: white;
`

export default class BlogPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Blog>
        <Globals pathname={'/about'} />
        <Header left={[{url: '/', name: 'home'}, {url: '/about', name: 'about'}]} right={[{url: '/', name: 'Jannik Wibker'}]} />
        <Main>
          About
        </Main>
        <Footer />
      </Blog>
    )
  }
}

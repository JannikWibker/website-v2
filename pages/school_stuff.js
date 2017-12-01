import React, { Component } from 'react'
import styled from 'styled-components'

import info from '../static/school_stuff/info.json'

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Main from '../components/Main.js'
import Globals from '../components/Globals.js'
import Link from '../components/Link.js'

const path = '/static/school_stuff/'

const SchoolStuff = styled.div`
  background-color: black;
  color: white;

  .Terminal {
    margin: auto;
  }
`

const Display = styled.div`
  max-width: 80vw;
  min-width: 20vw;
  width: 448px;
  text-align: left;
  margin: auto;
`

export default class SchoolStuffPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SchoolStuff>
        <Globals pathname={'/about'} />
        <Header
          left={[{url: '/', name: 'home'}, {url: '/about', name: 'about'}, {url: '/school_stuff', name: 'school_stuff'}]}
          right={[{url: 'https://github.com/JannikWibker/website-v2', name: '(src)'}, {url: '/', name: 'Jannik Wibker'}]} />
        <Main>
          <Display>
            <h3>pdf files</h3>
            <ul>
            {info.files
              .filter(file => file.format === 'pdf')
              .map((file, i) => (
              <li key={i}>
                <Link style={true} href={path + file.file} name={file.name} ignore_prefetch={true} />
              </li>
            ))}
            </ul>
          </Display>
        </Main>
        <Footer />
      </SchoolStuff>
    )
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'

import info from '../static/school_stuff/info.json'

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Main from '../components/Main.js'
import Globals from '../components/Globals.js'
import Link from '../components/Link.js'

const path = '/static/school_stuff/'

const color = {
  bg: 'white',
  text: 'black'
}

const Projects = styled.div`
  background-color: ${color.bg};
  color: ${color.text};

  ul {
    margin: 0px;
    padding: 0px;
    padding-left: 14px;
    list-style: none;
  }

  ul li {
    padding-bottom: 2px;
  }

  ul li::before {
    content: "\uFE61";
    padding-right: 6px;
  }
`

const Display = styled.div`
  max-width: 80vw;
  min-width: 20vw;
  width: 448px;
  text-align: left;
  margin: auto;
`

const Indent = styled.div`
  padding-left: 20px;
`

const projects = [
  {name: 'EnceladusBot', url: '/enceladusbot'},
  {name: 'LRMS', url: '/lrms'},
  {name: 'Spreadsheets', url: '/spreadsheets'},
]

export default class ProjectsPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Projects>
        <Globals pathname={'/projects'} />
        <Header
          left={[{url: '/', name: 'home'}, {url: '/about', name: 'about'}, {url: '/projects', name: 'projects'}]}
          right={[{url: 'https://github.com/JannikWibker/website-v2', name: '(src)'}, {url: '/', name: 'Jannik Wibker'}]}
          color={color.bg} />
        <Main>
          <Display>
            <h3>Projects</h3>
            <ul>
              {projects.map((project, i) => (
                <li key={i}>
                  <Link href={project.url}>{project.name}</Link>
                </li>
              ))}
            </ul>
            <h3>school stuff</h3>
            <Indent>
              <h4>PDF Files</h4>
              <ul>
                {info.files
                  .filter(file => file.format === 'pdf')
                  .map((file, i) => (
                  <li key={i}>
                    <Link href={path + file.file} name={file.name} ignore_prefetch={true} />
                  </li>
                ))}
              </ul>
            </Indent>
          </Display>
        </Main>
        <Footer color={color.bg} />
      </Projects>
    )
  }
}

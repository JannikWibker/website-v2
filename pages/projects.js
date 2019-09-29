import React, { Component } from 'react'
import styled from 'styled-components'

import info from '../static/school_stuff/info.json'

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Main from '../components/Main.js'
import Display from '../components/Display.js'
import Globals from '../components/Globals.js'
import Link from '../components/Link.js'

// const path = '/static/school_stuff/'

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

const Indent = styled.div`
  padding-left: 20px;
`

const Description = styled.span`
  color: slategrey;
`

const projects = [
  
  {name: 'git',               private: true,  description: 'personal git server', url: 'https://git.jannik.ml'},
  {name: 'lrms',              private: true,  description: 'Laptop Reservation Management System (discontinued)', url: '/lrms'},

  {name: 'docs',              private: false, description: 'self hosted math/it wiki (ger)', url: 'https://docs.jannik.ml'},
  {name: 'notes',             private: false, description: 'note taking web app', url: 'https://notes.jannik.ml'},
  {name: 'auth',              private: false, description: 'self-made IDP system (link to dashboard)', url: 'https://accounts.jannik.ml'},
  {name: 'EnceladusBot',      private: false, description: 'telegram bot', url: '/enceladusbot'},
  {name: '6502-disassembler', private: false, description: '6502 disassembler (Lua)', url: 'https://github.com/JannikWibker/6502-disassembler'},
  {name: 'dd-update',         private: false, description: 'ddclient alternative (cloudflare only)', url: 'https://github.com/JannikWibker/dd-update'},
  {name: 'weather',           private: false, description: 'weather web app', url: 'https://weather.jannik.ml'},
  // {name: 'fileManager', private: true, description: '', url: 'https://files.jannik.ml'},
  // {name: 'spreadsheets', private: true, description: '', url: '/spreadsheets'},
  {name: 'html_to_md',        private: false, description: '', url: '/html_to_md'},
  {name: 'utils',             private: false, description: '', url: '/utils'},
]

export default class ProjectsPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Projects>
        <Globals pathname={'/projects'} color={color.bg} />
        <Header
          left={[{url: '/', name: 'home'}, {url: '/about', name: 'about'}, {url: '/projects', name: 'projects'}]}
          right={[{url: 'https://github.com/JannikWibker/website-v2', name: '(src)'}, {url: '/', name: 'Jannik Wibker'}]}
          color={color.bg} />
        <Main>
          <Display>
            <h3>Projects</h3>
            <Indent>
              <h4>public projects</h4>
              <ul>
              {projects.filter(project => !project.private).map((project, i) => (
                <li key={i}>
                  <Link href={project.url}>
                  {project.name}
                  {project.description ? <Description>&nbsp;&nbsp;&nbsp;&nbsp;{project.description}</Description> : null}
                </Link>
                </li>
              ))}
            </ul>
            </Indent>
            <Indent>
              <h4>private projects (offline or login with privileged account required)</h4>
              <ul>
              {projects.filter(project => project.private).map((project, i) => (
                <li key={i}>
                  <Link href={project.url}>
                    {project.name}
                    {project.description ? <Description>&nbsp;&nbsp;&nbsp;&nbsp;{project.description}</Description> : null}
                  </Link>
                </li>
              ))}
            </ul>
            </Indent>
            <Indent>
                <h4>other projects</h4>
                <p>There are many more projects which are completely private at the moment and don't have a hosted version or only consist of api endpoints or are just not nearly completed.</p>
                <p>Some of these projects are an <i>ip lookup</i> api, <i>exif metadata</i> parser, <i>proxy server</i> with authentication support, <i>spreadsheet</i> program, <i>bottom up</i> parser for regular languages.</p>
            </Indent>
          </Display>
        </Main>
        <Footer color={color.bg} />
      </Projects>
    )
  }
}

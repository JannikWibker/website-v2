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
  {name: 'EnceladusBot', private: false, description: 'telegram bot', url: '/enceladusbot'},
  {name: 'LRMS', private: true, description: 'Laptop Reservation Management System', url: '/lrms'},
  {name: 'docs', private: true, description: 'school documents', url: 'https://docs.jannik.ml'},
  {name: 'Notes', private: false, description: 'note taking web app', url: 'https://notes.jannik.ml'},
  {name: 'weather', private: false, description: 'weather web app', url: 'https://weather.jannik.ml'},
  {name: 'git', private: true, description: 'personal git server', url: 'https://git.jannik.ml'},
  {name: 'fileManager', private: true, description: '', url: 'http://jannik.ddns.net:9124/files'},
  {name: 'spreadsheets', private: true, description: '', url: '/spreadsheets'},
  {name: 'html_to_md', private: false, description: '', url: '/html_to_md'},
  {name: 'utils', private: false, description: '', url: '/utils'},
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
              <h4>public projects (no login required)</h4>
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
              <h4>private projects (login required or not online at all)</h4>
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
            {/*<h3>school stuff</h3>
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
                  </Indent>*/}
          </Display>
        </Main>
        <Footer color={color.bg} />
      </Projects>
    )
  }
}

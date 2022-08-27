import React from 'react'
import { styled } from '../stitches.config'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Display from '../components/Display'
import Globals from '../components/Globals'
import Link from '../components/Link'

const color = {
  bg: 'white',
  text: 'black'
}

const Projects = styled('div', {
  backgroundColor: color.bg,
  color: color.text,

  'ul': {
    margin: '0px',
    padding: '0px',
    paddingLeft: '14px',
    listStyle: 'none'
  },

  'ul li': {
    paddingBottom: '2px',
  },

  'ul li::before': {
    content: '\uFE61',
    paddingRight: '6px',
  }
})

const Indent = styled('div', {
  paddingLeft: '20px'
})

const Description = styled('span', {
  color: 'slategrey'
})

const projects = [
  { name: 'docs',               private: false, description: 'self hosted math/computer science wiki (mostly german)', url: 'https://docs.jannikwibker.dev' },
  { name: 'notes',              private: false, description: 'note taking web app', url: 'https://notes.jannikwibker.dev' },
  { name: 'dotfiles',           private: false, description: 'personal dotfiles for both linux and macOS', url: 'https://github.com/JannikWibker/dots' },
  { name: 'spreadsheets',       private: false, description: 'little spreadsheets app with formula support', url: 'https://github.com/JannikWibker/spreadsheets' },
  { name: 'auth',               private: false, description: 'self-made identity provider (link to account dashboard)', url: 'https://accounts.jannikwibker.dev' },
  { name: 'mima-x vm',          private: false, description: 'vm for the educational mima-x instruction set', url: 'https://github.com/JannikWibker/mimax-vm' },
  { name: 'tm_vm',              private: false, description: 'turing machine simulator with tikz / LaTeX output (and gif, pdf, ...)', url: 'https://github.com/JannikWibker/tm_vm' },
  { name: '6502-disassembler',  private: false, description: '6502 disassembler (Lua)', url: 'https://github.com/JannikWibker/6502-disassembler' },
  { name: 'dd-update',          private: false, description: 'ddclient alternative (cloudflare only)', url: 'https://github.com/JannikWibker/dd-update' },
  { name: 'smart tv system',    private: false, description: 'university project: displaying useful information on a smart tv', url: 'https://git.jannikwibker.dev/PSE' },
  { name: 'jdkbd',              private: false, description: 'custom mechanical keyboard (pcb & case; split 40% ortho; based on crkbd)', url: 'https://github.com/JannikWibker/jdkbd' }
]

const ProjectsPage = () => (
  <Projects className="Page">
    <Globals pathname={'/projects'} color={color.bg} />
    <Header
      left={[{url: '/', name: 'home'}, {url: '/about', name: 'about'}, {url: '/projects', name: 'projects'}]}
      right={[{url: 'https://github.com/JannikWibker/website-v2', name: '(src)'}, {url: '/', name: 'Jannik Wibker'}]}
      color={color.bg} />
    <Main>
      <Display>
        <h3>projects</h3>
        <Indent>
          <p>
            A list of some of my projects
          </p>
          <ul>
            {projects.map((project, i) => (
              <li key={i}>
                <Link href={project.url}>
                  {project.name}
                  {project.description ? <Description>&nbsp;&nbsp;&nbsp;&nbsp;{project.description}</Description> : null}
                </Link>
              </li>
            ))}
          </ul>

        <p>Many more unfinished projects, private projects or projects without a live version running.</p>
        <p>You might find something interesting here:</p>
        <b>github</b>: <Link href="https://github.com/JannikWibker">JannikWibker</Link><br />
        <b>personal git server</b>: <Link href="https://git.jannikwibker.dev/">git.jannikwibker.dev</Link>
        </Indent>
      </Display>
    </Main>
    <Footer color={color.bg} />
  </Projects>
)

export default ProjectsPage

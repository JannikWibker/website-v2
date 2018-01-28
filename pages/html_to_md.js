import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Main from '../components/Main.js'
import Globals from '../components/Globals.js'

import Sidebar from '../components/docs/Sidebar.js'
import Paragraph from '../components/docs/Paragraph.js'
import MainSection from '../components/docs/Main.js'

import isNode from '../util/isNode.js'

const color = {
  bg: 'white',
  text: 'black'
}

const HtmlToMd = styled.div`
  background-color: ${color.bg};
  color: ${color.text};
`

const info = {
  'html_to_md': {
    'html_to_md': [
      <p>github repo: <a href="https://github.com/JannikWibker/html_to_md">html_to_md</a></p>,
      <p>Ever wanted to turn existing HTML into markdown? No? Yeah maybe it's not super useful but it has its use cases:</p>,
      <ul>
        <li>'caching' strategy for simple pages for offline usage (such as wikipedia pages or other similar pages with information such as <a href="http://www.vlsm-calc.net/models.php">this one</a> for example)</li>
        <li>reading mode when compiling the markdown to pdf or back to html (overall removes clutter from sites)</li>
        <li>turning html documents back into markdown incase the markdown source code was lost</li>
      </ul>
    ],
    'features': [
      <p><em>html_to_md</em> has support for many html elements (unsupported elements are just ignored):</p>,
      <ul>
        <li>spans</li>
        <li>links (<em>a</em>)</li>
        <li>text formatting (<em>em</em>, <em>i</em>, <em>strong</em>, <em>b</em>, <em>strike</em>)</li>
        <li>images (<em>img</em>)</li>
        <li>tables</li>
        <li>headings (<em>h1</em>, <em>h2</em>, <em>h3</em>, <em>h4</em>, <em>h5</em>, <em>h6</em>)</li>
        <li>paragraphs (<em>p</em>)</li>
        <li>lists (<em>ul</em>, <em>ol</em>)</li>
        <li>code</li>
        <li>super script (<em>sup</em>)</li>
        <li>sub script (<em>sub</em>)</li>
        <li>linebreaks (<em>br</em>)</li>
        <li>hr</li>
      </ul>
    ],
    'installation': [
      <p>Best just use <code>git</code> to install <em>html_to_md</em></p>,
      <code>git clone https://github.com/JannikWibker/html_to_md</code>
    ],
    'usage': [
      <p>import html_to_md</p>,
      <code>const html_to_md = require('../index.js')</code>,
      <p>example html</p>,
      <code>{'const html = `'}<br />
        &nbsp;&nbsp;{'<body>'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;{'<h1>This is a H1</h1>'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;{'<p>This is a paragraph</p>'}<br />
        <br />
        &nbsp;&nbsp;{'</body>`'}<br />
      </code>,
      <p>call html_to_md with the html and a selector (it's like document.querySelector, if none is given, <code>'body'</code> is used)</p>,
      <code>html_to_md(html, 'body')[0]</code>,
      <p>the <code>[0]</code> is because html_to_md returns an array (with entries for every element returned by the selector, in this case it's just one)</p>,
      <p>The following markdown is returned:</p>,
      <code>
      {'# This is a H1'}<br />
      <br />
      {'This is a paragraph'}<br />
      </code>
    ],
    'demo': [
      <p>for a demonstration of <em>html_to_md</em>'s go visit the <a href="https://github.com/JannikWibker/html_to_md/tree/master/demo">github repository</a></p>,
    ]
  }
}

export default class HtmlToMdPage extends Component {
  constructor(props) {
    super(props)

    this.update = this.update.bind(this)

    this.state = {
      selected: ''
    }
  }

  update(selected) {
    console.log('selected ' + selected)
    this.setState({ selected })
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
          <Sidebar data={info} selected={this.state.selected} cb={this.update} />
          <MainSection>
            {Object.keys(info['html_to_md']).map((item, i) => (
              <Paragraph key={i} headline={item} cb={this.update}>
                {info['html_to_md'][item].map((x, i) => <span key={i}>{x}</span>)}
              </Paragraph>
            ))}
          </MainSection>
        </Main>
        <Footer color={color.bg} />
      </HtmlToMd>
    )
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'

import Link from './Link.js'

const FooterWrapper = styled.footer`
  box-sizing: content-box;
  width: 100%;
  max-height:96px;
  min-height: 32px;
  padding-bottom: 20px;
  padding-top: 20px;
  overflow: auto;
`

const FooterItem = styled.div`
  text-align: center;
  width: 100%;
  height: 32px;
  font-family: "Menlo", DejaVu Sans Mono, Lucida Console, monospace, sans-serif;
  font-weight: 100;
  font-size: 12px;
  line-height: 32px;

  img {
    width: 16px;
    height: 16px;
    margin: -4px 4px;
  }

  span {
    text-decoration: none;
    color: white;
  }
`

export default class Header extends Component {
  render() {
    return (
      <FooterWrapper className="container">
        <FooterItem className="four columns">
          <Link style={true} href={'https://twitter.com/JannikWibker'}>
              <img alt="Twitter" src={'/static/images/twitter.png'} />
              <span>@JannikWibker</span>
          </Link>
        </FooterItem>
        <FooterItem className="four columns">
          <Link style={true} href={'https://github.com/JannikWibker'}>
              <img alt="GitHub" src={'/static/images/github.png'} />
              <span>JannikWibker</span>
          </Link>
        </FooterItem>
        <FooterItem className="four columns">
          <Link style={true} href={'mailto:jannikwibker@gmail.com'}>
              <img alt="E-mail" src={'/static/images/email.png'} />
              <span>jannikwibker@gmail.com</span>
          </Link>
        </FooterItem>
      </FooterWrapper>
    )
  }
}

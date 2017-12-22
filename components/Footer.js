import React, { Component } from 'react'
import styled from 'styled-components'
import { EmailIcon, TwitterIcon, GithubIcon } from './Icon.js'

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

  svg {
    width: 16px;
    height: 16px;
    margin: -4px 4px;
  }
`

const Text = styled.span`
  text-decoration: none;
  color: ${props => props.color};
`

export default class Header extends Component {
  render() {
    const color = this.props.color
      ? this.props.color === 'black'
        ? '#fff'
        : '#000'
      : '#fff'

    return (
      <FooterWrapper className="container">
        <FooterItem className="four columns">
          <Link style={true} href={'https://twitter.com/JannikWibker'}>
              <TwitterIcon alt="Twitter" color={color} />
              <Text color={color}>@JannikWibker</Text>
          </Link>
        </FooterItem>
        <FooterItem className="four columns">
          <Link style={true} href={'https://github.com/JannikWibker'}>
              <GithubIcon alt="Github" color={color} />
              <Text color={color}>JannikWibker</Text>
          </Link>
        </FooterItem>
        <FooterItem className="four columns">
          <Link style={true} href={'mailto:jannikwibker@gmail.com'}>
              <EmailIcon alt="E-mail" color={color} />
              <Text color={color}>jannikwibker@gmail.com</Text>
          </Link>
        </FooterItem>
      </FooterWrapper>
    )
  }
}

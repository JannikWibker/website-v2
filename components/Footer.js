import React, { Component } from 'react'
import styled from 'styled-components'
import { EmailIcon, TwitterIcon, GithubIcon } from './Icon.js'

import Link from './Link.js'
import Grid from './Grid.js'

const Offset = styled.div`
  @media(min-width:400px) {
    float: left;
    position: relative;
    display: inline-block;
    width: 4%;
    height: 32px;
  }

  @media(min-width:750px) {
    display: none;
  }
`

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

  div {
    width: 100%;
  }

  svg {
    width: 16px;
    height: 16px;
    margin: -4px 4px;
  }

  svg path:not([fill]) {
    fill: ${props => props.color}
  }

  a:hover svg path:not([fill]) {
    fill: #fff;
  }

  a:hover span {
    color: #fff;
  }

  @media(min-width:400px) {

    display: inline-block;

    span {
      display: none;
    }

    a {
      display: block;
      width: 100%;
    }
  }

  @media(min-width:750px) {

    img {
      width: 16px;
      height: 16px;
      margin: -4px 4px;
    }

    span {
      display: inline;
      text-decoration: none;
      color: ${props => props.color}
    }
  }

`
export default class Header extends Component {
  render() {
    const color = this.props.color
      ? this.props.color === 'black'
        ? '#fff'
        : '#000'
      : '#fff'

    return (
      <Grid>
        <FooterWrapper className="container">
          <FooterItem color={color} className="four columns">
            <Link style={true} href={'https://twitter.com/JannikWibker'}>
              <TwitterIcon labelledby="twitter_username" alt="Twitter" color={color} />
              <span id="twitter_username">@JannikWibker</span>
            </Link>
          </FooterItem>
          <Offset />
          <FooterItem color={color} className="four columns">
            <Link style={true} href={'https://github.com/JannikWibker'}>
              <GithubIcon labelledby="github_username" alt="Github" color={color} />
              <span id="github_username">JannikWibker</span>
            </Link>
          </FooterItem>
          <Offset />
          <FooterItem color={color} className="four columns">
            <Link style={true} href={'mailto:jannikwibker@gmail.com'}>
              <EmailIcon labelledby="email_adress" alt="E-mail" color={color} />
              <span id="email_adress">jannikwibker@gmail.com</span>
            </Link>
          </FooterItem>
        </FooterWrapper>
      </Grid>
    )
  }
}

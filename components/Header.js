import React, { Component } from 'react'
import styled from 'styled-components'

import Link from './Link.js'

const HeaderWrapper = styled.header`
  position: relative;
  max-width: 900px;
  margin: auto;
  padding: 30px 8px;
`

const HeaderIcon = styled.div`
  display: block;
  width: 40px;
  height: 40px;
  position: relative;
  top: -10px;
  padding-top: 10px;
`

const Container = styled.div`
  width: 100%;
`

const HeaderLeft = styled.nav`
  margin-top: -6px;
  padding: 10px;
  padding-right: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50px;
`

const HeaderRight = styled.nav`
  margin-top: -6px;
  padding: 10px;
  padding-right: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0px;
`

const HeaderItem = styled.span`
  padding: 10px;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Fira Sans, Droid Sans, sans-serif;
  > a {
    text-decoration: none;
  }
`

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderIcon>
          <span>
            <svg width="40" height="40" role="button">
              <circle cx="20" cy="20" r="20" fill="#fff" />
            </svg>
          </span>
        </HeaderIcon>
        <Container>
          <HeaderLeft>
            {this.props.left.map((item, i) => (
              <HeaderItem role="button" key={i}>
                <Link style={true} href={item.url} name={item.name} />
              </HeaderItem>
            ))}
          </HeaderLeft>
          <HeaderRight>
            {this.props.right.map((item, i) => (
              <HeaderItem role="button" key={i}>
                <Link style={true} href={item.url} name={item.name} />
              </HeaderItem>
            ))}
          </HeaderRight>
        </Container>
      </HeaderWrapper>
    )
  }
}

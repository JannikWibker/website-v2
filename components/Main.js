import React, { Component } from 'react'
import styled from 'styled-components'

const MainWrapper = styled.main`
  min-height: calc(100vh - 110px - 72px);
  font-size: 14px;
  text-align: center;
  font-weight: 300;
`

export default class Header extends Component {
  render() {
    return (
      <MainWrapper>
        {this.props.children}
      </MainWrapper>
    )
  }
}

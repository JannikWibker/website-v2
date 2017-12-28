import React, { Component } from 'react'
import styled from 'styled-components'

const Main = styled.main`
  min-height: calc(100vh - 110px - 72px);
  font-size: 14px;
  text-align: center;
  font-weight: 300;
  overflow: auto;

  @media(min-width:400px) {
    min-height: calc(100vh - 110px - 32px);
  }

  @media(min-width:750px) {
    min-height: calc(100vh - 110px - 72px);
  }
`

export default Main

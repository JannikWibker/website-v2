import React, { Component } from 'react'
import styled from 'styled-components'

const Main = styled.main`
  min-height: calc(100vh - 110px - 72px);
  font-size: 14px;
  text-align: center;
  font-weight: 300;

  @media(min-width:400px) {
    min-height: calc(100vh - 110px - 32px);
  }
`

export default Main

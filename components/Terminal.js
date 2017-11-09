import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.span`
  position: absolute;
  top: 12px;
  text-align: center;
  font-size: 12px;
  margin-left: -26.5px;
`

const Button = styled.span`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
`

const ButtonClose = Button.extend`
  left: 13px;
  background-color: #ff5f56;
`

const ButtonMinimize = Button.extend`
  left: 33px;
  background-color: #ffbd2e;
`

const ButtonMaximize = Button.extend`
  left: 53px;
  background-color: #27c93f;
`

let Container, Border, Header, Main

export default class Terminal extends Component {
  constructor(props) {
    super(props)

    Container = styled.div`
      box-sizing: border-box;
      border-radius: 6px;
      width: ${props.width || 450}px;
      height: ${props.height || 260}px;
      background-color: black;
      color: white;
      max-width: 90vw;
    `

    Border = styled.div`
      box-sizing: inherit;
      position: relative;
      background-color: black;
      border: 1px solid #666;
      border-radius: 5px;
      width: 100%;
      height: 100%;
      max-width: 90vw;
    `

    Header = styled.div`
      box-sizing: inherit;
      position: absolute;
      width: 100%;
      height: 36px;
      max-width: 90vw;
      text-align: center;
    `


    Main = styled.div`
      box-sizing: inherit;
      width: calc(100% - 24px);
      height: calc(100% - 36px);
      margin: 36px 12px 0 12px;
      text-align: left;
      font-size: 10px;
      font-family: "Menlo";
      color: white;
    `
  }

  render() {
    return (
      <Container className="Terminal">
        <Border>
          <Header>
            <ButtonClose />
            <ButtonMinimize />
            <ButtonMaximize />
            <Title>{this.props.title}</Title>
          </Header>
          <Main>
            {this.props.children}
          </Main>
        </Border>
      </Container>
    )
  }
}

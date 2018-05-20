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

    const color_white = {
      text: 'black',
      bg: 'white',
      border: '#ccc'
    }

    const color_black = {
      text: 'white',
      bg: 'black',
      border: '#666'
    }

    const color = (this.props.color || 'black') === 'white'
      ? color_white
      : color_black

    Container = styled.div`
      box-sizing: border-box;
      border-radius: 6px;
      width: ${props.width || 450}px;
      height: ${props.height || 260}px;
      background-color: ${color.bg};
      color: ${color.text};
      max-width: 90vw;
    `

    Border = styled.div`
      box-sizing: inherit;
      position: relative;
      background-color: ${color.bg};
      border: 1px solid ${color.border};
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
      font-size: ${this.props.fontsize || 10}px;
      line-height: ${this.props.fontsize ? this.props.fontsize + 1 : 10+1}px;
      font-family: "Menlo", DejaVu Sans Mono, Lucida Console, monospace, sans-serif;
      color: ${color.text};
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

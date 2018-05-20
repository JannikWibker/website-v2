import React from 'react'
import styled from 'styled-components'
import { Keyframes, Frame } from 'react-keyframes'

const TerminalLink = styled.a`
  color: unset;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`

const space = (amount) => <span>{'\u00A0'.repeat(amount)}</span>

const C = ({c, children}) => <span style={{color: c}}>{children}</span>

const Int = ({children}) => <span style={{color: '#2aa198'}}>{children}</span>
// <Int></Int>
const Str = ({children}) => <span style={{color: 'hsla(45, 100%, 45%, 1)'}}>{children}</span>
// <Str></Str>
const Key = ({children}) => <span style={{color: ''}}>{children}</span>
// <Key></Key>
const StillCaret = ({font_size = 10, color = 'white'}) => <span style={{display: 'inline-block', width: 4, height: font_size, backgroundColor: color, marginBottom: -2}} />

const Caret = ({speed = 400, font_size = 10}) => (
  <Keyframes loop={true}>
    <Frame duration={speed}>&nbsp;</Frame>
    <Frame duration={speed}>
      <StillCaret font_size={font_size} />
    </Frame>
  </Keyframes>
)

export {
  TerminalLink, space, C, Int, Str, Key, StillCaret, Caret
}

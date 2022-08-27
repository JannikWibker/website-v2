import React, { PropsWithChildren } from 'react'
import { styled } from '../stitches.config'
import { Keyframes, Frame } from 'react-keyframes'

const TerminalLink = styled('a', {
  color: 'unset',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline'
  }
})

const space = (amount: number) => <span>{'\u00A0'.repeat(amount)}</span>

const C: React.FC<PropsWithChildren<{ c: string }>> = ({ c, children }) => <span style={{color: c}}>{children}</span>

// <Int></Int>
const Int = styled('span', { color: '#2aa198' })

// <Str></Str>
const Str = styled('span', { color: 'hsla(45, 100%, 45%, 1)' })

// <Key></Key>
const Key = styled('span', { color: '' })

const StillCaret: React.FC<{ fontSize?: number, color?: string }> = ({ fontSize = 10, color = 'white' }) => {

  const StillCaretStyled = styled('span', {
    display: 'inline-block',
    width: 4,
    height: fontSize,
    backgroundColor: color,
    marginBottom: '-2px'
  })

  return <StillCaretStyled />
}

const Caret = ({speed = 400, fontSize = 10}) => (
  <Keyframes loop={true}>
    <Frame duration={speed}>&nbsp;</Frame>
    <Frame duration={speed}>
      <StillCaret fontSize={fontSize} />
    </Frame>
  </Keyframes>
)

export {
  TerminalLink, space, C, Int, Str, Key, StillCaret, Caret
}

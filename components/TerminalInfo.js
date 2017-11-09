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
const StillCaret = ({font_size = 10}) => <span style={{display: 'inline-block', width: 4, height: font_size, backgroundColor: 'white', marginBottom: -2}} />

const Caret = ({speed = 400, font_size = 10}) => (
  <Keyframes loop={true}>
    <Frame duration={speed}>&nbsp;</Frame>
    <Frame duration={speed}>
      <StillCaret font_size={font_size} />
    </Frame>
  </Keyframes>
)

export default () => (
  <Keyframes loop={false} delay={300}>
    <Frame duration={500}><C c='#d33682'>λ</C> ~ <StillCaret /></Frame>
    <Frame duration={70}><C c='#d33682'>λ</C> ~ i<StillCaret /></Frame>
    <Frame duration={70}><C c='#d33682'>λ</C> ~ in<StillCaret /></Frame>
    <Frame duration={90}><C c='#d33682'>λ</C> ~ inf<StillCaret /></Frame>
    <Frame duration={100}><C c='#d33682'>λ</C> ~ info<StillCaret /></Frame>
    <Frame duration={370}>
      <C c='#d33682'>λ</C> ~ info<br />
      {'{'}<br />
      {space(1)}name:{space(1)}<Str>"Jannik Wibker"</Str>,<br />
      {space(1)}age:{space(2)}<Int>18</Int>,<br />
      {space(1)}location:{space(1)}<Str>"Germany"</Str>,<br />
      {space(1)}languages:{space(1)}{'{'}...{'}'}<br />
      {space(1)}contact:{space(1)}{'{'}...{'}'}<br />
    </Frame>
    <Frame duration={9800}>
      <C c='#d33682'>λ</C> ~ info<br />
      {'{'}<br />
      {space(1)}name:{space(1)}<Str>"Jannik Wibker"</Str>,<br />
      {space(1)}age:{space(2)}<Int>18</Int>,<br />
      {space(1)}location:{space(1)}<Str>"Germany"</Str>,<br />
      {space(1)}languages:{space(1)}{'{'}<br />
      {space(2)}german:{space(2)}<Str>"native speaker"</Str>,<br />
      {space(2)}english:{space(1)}<Str>"advanced"</Str>,<br />
      {space(2)}french:{space(2)}<Str>"beginner"</Str><br />
      {space(1)}{'}'},<br />
      {space(1)}contact:{space(1)}{'{'}<br />
      {space(2)}email:{space(2)}<Str>"<TerminalLink href={'mailto:jannikwibker@gmail.com'}>jannikwibker@gmail.com</TerminalLink>"</Str>,<br />
      {space(2)}github:{space(1)}<Str>"<TerminalLink href={'https://github.com/JannikWibker'}>JannikWibker</TerminalLink>"</Str>,<br />
      {space(2)}website:{space(1)}<Str>"<TerminalLink href={'http://jannik.ddns.net'}>jannik.ddns.net</TerminalLink>"</Str>,<br />
      {space(2)}twitter:{space(1)}<Str>"<TerminalLink href={'https://twitter.com/JannikWibker'}>@JannikWibker</TerminalLink>"</Str><br />
      {space(1)}{'}'}<br />
      {'}'}<br />
      <C c='#d33682'>λ</C> ~ <Caret font_size={10} />
    </Frame>
  </Keyframes>
)

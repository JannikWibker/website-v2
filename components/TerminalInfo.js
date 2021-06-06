import React from 'react'
import { Keyframes, Frame } from 'react-keyframes'

import { TerminalLink, space, C, Int, Str, StillCaret, Caret } from './Shell.js'

const TerminalInfo = ({ age = 21 }) => (
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
      {space(1)}age:{space(2)}<Int>{age}</Int>,<br />
      {space(1)}location:{space(1)}<Str>"Germany"</Str>,<br />
      {space(1)}languages:{space(1)}{'{'}...{'}'}<br />
      {space(1)}contact:{space(1)}{'{'}...{'}'}<br />
    </Frame>
    <Frame duration={9800}>
      <C c='#d33682'>λ</C> ~ info<br />
      {'{'}<br />
      {space(1)}name:{space(1)}<Str>"Jannik Wibker"</Str>,<br />
      {space(1)}age:{space(2)}<Int>{age}</Int>,<br />
      {space(1)}location:{space(1)}<Str>"Germany"</Str>,<br />
      {space(1)}languages:{space(1)}{'{'}<br />
      {space(2)}german:{space(2)}<Str>"native speaker"</Str>,<br />
      {space(2)}english:{space(1)}<Str>"advanced"</Str>,<br />
      {space(2)}french:{space(2)}<Str>"beginner"</Str><br />
      {space(2)}chinese:{space(2)}<Str>"beginner"</Str><br />
      {space(1)}{'}'},<br />
      {space(1)}contact:{space(1)}{'{'}<br />
      {space(2)}email:{space(2)}<Str>"<TerminalLink href={'mailto:jannikwibker@gmail.com'}>jannikwibker@gmail.com</TerminalLink>"</Str>,<br />
      {space(2)}github:{space(1)}<Str>"<TerminalLink href={'https://github.com/JannikWibker'}>JannikWibker</TerminalLink>"</Str>,<br />
      {space(2)}website:{space(1)}<Str>"<TerminalLink href={'https://jannikwibker.dev'}>jannikwibker.dev</TerminalLink>"</Str>,<br />
      {space(2)}twitter:{space(1)}<Str>"<TerminalLink href={'https://twitter.com/JannikWibker'}>@JannikWibker</TerminalLink>"</Str><br />
      {space(1)}{'}'}<br />
      {'}'}<br />
      <C c='#d33682'>λ</C> ~ <Caret font_size={10} />
    </Frame>
  </Keyframes>
)


export default TerminalInfo

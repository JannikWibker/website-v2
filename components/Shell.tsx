import type { PropsWithChildren } from 'react'
import React from 'react'
import { Keyframes, Frame } from 'react-keyframes'

const TerminalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="no-underline hover:underline" style={{ color: 'unset' }}>
    {children}
  </a>
)

const space = (amount: number) => <span>{'\u00A0'.repeat(amount)}</span>

const C = ({ c, children }: PropsWithChildren<{ c: string }>) => <span style={{ color: c }}>{children}</span>

// <Int></Int>
const Int = ({ children }: PropsWithChildren) => <span className="text-[#2aa198]">{children}</span>

// <Str></Str>
const Str = ({ children }: PropsWithChildren) => <span className="text-[hsla(45,100%,45%,1)]">{children}</span>

// <Key></Key>
const Key = ({ children }: PropsWithChildren) => <span className="text-white">{children}</span>

const StillCaret: React.FC<{ fontSize?: number; color?: string }> = ({ color = 'white' }) => {
  return <span className="inline-block w-1 h-2.5 -mb-0.5" style={{ backgroundColor: color }} />
}

const Caret = ({ speed = 400, fontSize = 10 }) => (
  <Keyframes loop={true}>
    <Frame duration={speed}>&nbsp;</Frame>
    <Frame duration={speed}>
      <StillCaret fontSize={fontSize} />
    </Frame>
  </Keyframes>
)

export { TerminalLink, space, C, Int, Str, Key, StillCaret, Caret }

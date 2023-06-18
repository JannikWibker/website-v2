import React from 'react'
import type { PropsWithChildren } from 'react'
import clsx from 'clsx'

type TerminalProps = PropsWithChildren<{
  title: string
  variant?: 'light' | 'dark'
  width?: number
  height?: number
}>

const Terminal: React.FC<TerminalProps> = ({ width = 450, height = 280, variant = 'dark', title, children }) => (
  <div className={clsx('Terminal', 'max-w-[90vw]')} style={{ width: width + 'px', height: height + 'px' }}>
    <div
      className={clsx('relative w-full h-full rounded-md border', {
        'bg-black text-white border-[#666]': variant === 'dark',
        'bg-white text-black border-[#ccc]': variant === 'light'
      })}
    >
      <div className="relative w-full h-9">
        <div className={clsx('Terminal-Buttons', 'flex gap-2 h-full items-center ml-[13px]')}>
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="absolute w-full top-2.5 text-center text-xs leading-[inherit]">{title}</div>
      </div>
      <div
        className={clsx('font-mono w-[100%-24px] h-[100%-36px-24px] m-3 text-[10px] leading-[12px]', {
          'text-white': variant === 'dark',
          'text-black': variant === 'light'
        })}
      >
        {children}
      </div>
    </div>
  </div>
)

export default Terminal

import React from 'react'

import Link from './Link'

type HeaderProps = {
  left: { url: string; name: string }[]
  right: { url: string; name: string }[]
  color?: 'black' | 'white'
}

const Header = ({ left, right, color }: HeaderProps) => {
  return (
    <header className="relative max-w-[916px] m-auto py-[30px] px-2">
      <div className="block relative w-[50px] h-[50px] -top-2.5 pt-2.5">
        <span>
          <svg width="40" height="40">
            <circle cx="20" cy="20" r="20" fill={color ? (color === 'black' ? '#fff' : '#000') : '#fff'} />
          </svg>
        </span>
      </div>
      <div className="w-full">
        <nav className="-mt-1.5 p-2.5 pr-0 absolute top-1/2 transform -translate-y-1/2 left-[50px]">
          {left.map((item, i) => (
            <span role="button" key={i} className="p-2 font-sans text-xs font-normal uppercase [&>a]:no-underline [&>a:hover]:text-white">
              <Link isStyled href={item.url} name={item.name} />
            </span>
          ))}
        </nav>
        <nav className="-mt-1.5 p-2 pr-0 absolute top-1/2 transform -translate-y-1/2 right-0">
          {right.map((item, i) => (
            <span role="button" key={i} className="p-2 font-sans text-xs font-normal uppercase [&>a]:no-underline [&>a:hover]:text-white">
              <Link isStyled href={item.url} name={item.name} />
            </span>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header

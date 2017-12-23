import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import isAbsolute from 'is-absolute-url'

const A = styled.a`
  text-decoration: none;
  color: inherit;
  :hover {
    ${props => props.styled ? 'background-color: rgba(248,28,229,0.75);' : ''}
    ${props => props.styled ? '' : 'text-decoration: underline;'}
    ${props => props.styled ? 'color: white;' : ''}
  }
`

export default ({href, name, children, style=false, ignore_prefetch=false}) => {
  const isAnchor = href => href.charAt(0) === '#'

  return (isAnchor(href)
      ? <A  styled={style} href={href}>
          {name || children}
        </A>
      : isAbsolute(href) || ignore_prefetch
        ? <A  styled={style} href={href} target="_blank" rel="noreferrer noopener">
            {name || children}
          </A>
        : <Link href={href} prefetch>
            <A styled={style}>
              {name || children}
            </A>
          </Link>)

}

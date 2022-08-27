import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import isAbsoluteUrl from '../utils/is-absolute-url'

const A = styled.a`
  text-decoration: none;
  color: inherit;
  :hover {
    ${props => props.styled ? 'background-color: rgba(248,28,229,0.75);' : ''}
    ${props => props.styled ? '' : 'text-decoration: underline;'}
    ${props => props.styled ? 'color: white;' : ''}
  }
`

const MyLink = ({href, name, children, style=false, ignore_prefetch=false}) => {
  const isAnchor = href => href.charAt(0) === '#'

  const child = name || children

  return (isAnchor(href)
    ? <A styled={style} href={href}>{child}</A>
    : isAbsoluteUrl(href) || ignore_prefetch
      ? <A styled={style} href={href} target="_blank" rel="noreferrer noopener">{child}</A>
      : <Link href={href}><A href={href} styled={style}>{child}</A></Link>
  )
}

export default MyLink

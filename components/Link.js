import React from 'react'
import Link from 'next/link'
import { styled } from '../stitches.config'
import isAbsoluteUrl from '../utils/is-absolute-url'

const A = styled('a', {
  textDecoration: 'none',
  color: 'inherit',

  variants: {
    styled: {
      true: {
        '&:hover': {
          backgroundColor: 'rgba(248,28,229,0.75)',
          color: 'white'
        }
      },
      false: {
        '&:hover': {
          textDecoration: 'underline'
        }
      }
    }
  }
})

const MyLink = ({ href, name, children, isStyled=false, ignorePrefetch=false }) => {
  const isAnchor = (href) => href.charAt(0) === '#'

  const child = name || children

  return (isAnchor(href || '')
    ? <A styled={isStyled} href={href}>{child}</A>
    : isAbsoluteUrl(href || '') || ignorePrefetch
      ? <A styled={isStyled} href={href} target="_blank" rel="noreferrer noopener">{child}</A>
      : <Link href={href || ''}><A href={href} styled={isStyled}>{child}</A></Link>
  )
}

export default MyLink

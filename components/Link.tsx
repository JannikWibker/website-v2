import React, { PropsWithChildren } from 'react'
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

type LinkProps = PropsWithChildren<{
  href?: string,
  name?: string,
  isStyled?: boolean,
  ignorePrefetch?: boolean
}>

const MyLink: React.FC<LinkProps> = ({ href, name, children, isStyled=false, ignorePrefetch=false }) => {
  const isAnchor = (href: string) => href.charAt(0) === '#'

  const child = name || children

  return (isAnchor(href || '')
    ? <A styled={isStyled} href={href}>{child}</A>
    : isAbsoluteUrl(href || '') || ignorePrefetch
      ? <A styled={isStyled} href={href} target="_blank" rel="noreferrer noopener">{child}</A>
      : <Link href={href || ''}><A href={href} styled={isStyled}>{child}</A></Link>
  )
}

export default MyLink

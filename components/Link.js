import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const InnerLink = styled.a`
  text-decoration: none;
  :hover {
    background-color: rgba(248,28,229,0.75);
  }
`

export default ({url, name, children, style=true}) => (
  <Link prefetch href={url}>
    {style
      ? <InnerLink>{name || children}</InnerLink>
      : <a>{name || children}</a>
    }
  </Link>
)

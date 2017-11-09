import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const _Link = styled.a`
  text-decoration: none;
  color: inherit;
  :hover {
    ${props => props.styled ? 'background-color: rgba(248,28,229,0.75);' : ''}
  }
`


export default ({url, name, children, style=true}) => (
  <_Link styled={style} prefetch href={url}>
    {name || children}
  </_Link>
)

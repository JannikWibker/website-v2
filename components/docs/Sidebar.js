import React from 'react'
import styled from 'styled-components'

import Link from '../Link.js'

const SideNav = styled.nav`
  width: 128px;
  padding: 10px;
  text-align: left;
  float: left;

  > ul {
    padding-left: 20px;
  }

  > ul > li > ul {
    padding-left: 20px;
  }

  > ul > li > ul > li > a, > ul li > a {
    text-decoration: none
  }

  > ul > li > ul > li > a:hover {
    background-color: rgba(248,28,229,0.75);
    color: white;
  }

  > ul > li > a:hover {
    background-color: rgba(248,28,229,0.75)
    color: white;
  }
`

export default ({items, headline, headline_link}) => (
  <SideNav>
    <ul>
      <li><Link href={headline_link}>{headline}/</Link></li>
      <li>
        <ul>
          {items.map(item =>
            <li key={item}><a href={'#' + item}>{item}</a></li>
          )}
        </ul>
      </li>
    </ul>
  </SideNav>
)

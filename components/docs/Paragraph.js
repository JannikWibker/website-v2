import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.div`
  text-align: left;
  min-width: 200px;
  max-width: calc(100vw - 256px);

  > span > h3, > h3 {
    font-weight: bold;
    font-size: 18px;
  }

  > span > h3 > a, > h3 > a {
    text-decoration: none;
    color: inherit;
  }

  > span > h3 > a:hover, > h3 > a:hover {
    text-decoration: underline;
  }

  > span > p, > p {
    font-weight: 400;
    font-size: 14px;
  }

  code {
    font-family: 'Menlo';
  }

  > span > code, > code {
    display: block;
    min-width: 200px;
    font-size: 13px;
    line-height: 20px;
    border: 1px solid rgb(234, 234, 234);
    border-image: initial;
    padding: 8px;
    overflow: auto;
  }
`

export default ({paragraph, headline, children, cb=() => {}}) => (
  <Paragraph>
    <h3 id={headline}><a onClick={() => cb(headline)} href={'#' + headline}>{headline}</a></h3>
    {children}
  </Paragraph>
)

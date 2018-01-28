import React from 'react'
import styled from 'styled-components'

const P = styled.p`
  font-weight: 400px;
  font-size: 14px;
`

const Codeblock = styled.code`
  font-family: 'Menlo';
  display: block;
  min-width: 200px;
  font-size: 13px;
  line-height: 20px;
  border: 1px solid rgb(234, 234, 234);
  border-image: initial;
  padding: 8px;
  overflow: auto;
`

const Code = styled.code`
  font-family: 'Menlo';
  margin: 0 2px 0 2px;
`

const H3 = styled.h3`
  :hover {
    text-decoration: underline;
  }

  > a {
    text-decoration: none;
    color: inherit
  }
`

const Note = styled.p`
  color: rgb(153, 153, 153);
  font-size: 14px;
  text-align: left;
  margin: 16px 24px;
`

const SmallNote = Note.extend`
  font-size: 12px;
`

const BlockquoteWrapper = styled.blockquote`
  border-left: 5px solid rgb(0, 0, 0); // #e2e2e2;

  font-size: 14px;
  color: rgb(153, 153, 153);
  text-align: left;
  padding: 8px 16px;
  margin: 10px 0px;

  div {
    margin: 0px;
    margin-bottom: 1px;
  }
`

const Blockquote = ({children}) => (
  <BlockquoteWrapper>
    <div>{children}</div>
  </BlockquoteWrapper>
)

const ParagraphWrapper = styled.div`
  text-align: left;
  min-width: 200px;
  max-width: calc(100vw - 256px);
`

const Paragraph = ({paragraph, headline, children, cb=() => {}}) => (
  <ParagraphWrapper>
    <H3 id={headline}><a onClick={() => cb(headline)} href={'#' + headline}>{headline}</a></H3>
    {children}
  </ParagraphWrapper>
)

export { H3, Note, SmallNote, Blockquote, Codeblock, Code, Paragraph, P }

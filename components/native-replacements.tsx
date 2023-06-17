import Link from './Link'
import { styled } from '../stitches.config'

const H3 = styled('h3', {
  fontSize: '14px',
  margin: '1em 0',
  lineHeight: '20px',
  fontWeight: '600',
  textDecoration: 'underline'
})

const H4 = styled('h4', {
  fontSize: '13px',
  margin: '1.33em 0',
  fontWeight: '700'
})

const P = styled('p', {
  fontSize: '13px'
})

const UL = styled('ul', {
  paddingLeft: 40,
  marginTop: 14,
  marginBottom: 14
})

const LI = styled('li', {
  fontSize: '12px',
  lineHeight: '17px',
  listStyleType: 'decimal'
})

const Strong = styled('strong', {
  fontWeight: '600'
})

const components = {
  h3: H3,
  h4: H4,
  a: Link,
  p: P,
  ul: UL,
  li: LI,
  strong: Strong
}

export { components }

import React from 'react'
import { styled } from '../stitches.config'

import Link from './Link'

const HeaderWrapper = styled('header', {
  position: 'relative',
  maxWidth: '900px',
  margin: 'auto',
  padding: '30px 8px'
})

const HeaderIcon = styled('div', {
  display: 'block',
  width: '40px',
  height: '40px',
  position: 'relative',
  top: '-10px',
  paddingTop: '10px'
})

const Container = styled('div', {
  width: '100%'
})

const HeaderLeft = styled('nav', {
  marginTop: '-6px',
  padding: '10px',
  paddingRight: '0',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  left: '50px'
})

const HeaderRight = styled('nav', {
  marginTop: '-6px',
  padding: '8px',
  paddingRight: '0',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: '0px',
})

const HeaderItem = styled('span', {
  padding: '8px',
  fontSize: '12px',
  fontWeight: '400',
  textTransform: 'uppercase',
  fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Fira Sans, Droid Sans, sans-serif', // TODO: maybe replace this with the tailwind defaults?
  '> a': {
    textDecoration: 'none'
  },
  '> a:hover': {
    color: 'white'
  }
})

const Header = ({ left, right, color }) => {
  return (
    <HeaderWrapper>
      <HeaderIcon>
        <span>
          <svg width="40" height="40">
            <circle cx="20" cy="20" r="20" fill={color ? color === 'black' ? '#fff' : '#000' : '#fff'} />
          </svg>
        </span>
      </HeaderIcon>
      <Container>
        <HeaderLeft>
          {left.map((item, i) => (
            <HeaderItem role="button" key={i}>
              <Link isStyled href={item.url} name={item.name} />
            </HeaderItem>
          ))}
        </HeaderLeft>
        <HeaderRight>
          {right.map((item, i) => (
            <HeaderItem role="button" key={i}>
              <Link isStyled href={item.url} name={item.name} />
            </HeaderItem>
          ))}
        </HeaderRight>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

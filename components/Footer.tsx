import React from 'react'
import { styled } from '../stitches.config'
import { EmailIcon, TwitterIcon, GithubIcon } from './Icons'

import Link from './Link'
import Grid from './Grid'

const Offset = styled('div', {
  '@media(min-width:400px)': {
    float: 'left',
    position: 'relative',
    display: 'inline-block',
    width: '4%',
    height: '32px'
  },
  '@media(min-width:750px)': {
    display: 'none'
  }
})

const FooterWrapper = styled('footer', {
  boxSizing: 'content-box',
  width: '100%',
  maxHeight: '96px',
  minHeight: '32px',
  paddingBottom: '20px',
  paddingTop: '20px',
  overflow: 'auto'
})

const FooterItem = styled('div', {
  textAlign: 'center',
  width: '100%',
  height: '32px',
  fontWeight: '100',
  fontSize: '12px',
  lineHeight: '32px',

  div: {
    width: '100%'
  },

  svg: {
    width: '16px',
    height: '16px',
    margin: '-4px 4px'
  },
  'a:hover span': {
    color: 'white'
  },
  '@media(min-width:400px)': {
    display: 'inline-block',
    span: {
      display: 'none'
    },
    a: {
      display: 'block',
      width: '100%'
    }
  },
  '@media(min-width:750px)': {
    img: {
      width: '16px',
      height: '16px',
      margin: '-4px 4px'
    },
    span: {
      display: 'inline',
      textDecoration: 'none'
    }
  },
  varaints: {
    color: {
      white: {
        '@media(min-width:750px)': {
          span: {
            color: 'white'
          }
        }
      },
      black: {
        '@media(min-width:750px)': {
          span: {
            color: 'black'
          }
        }
      }
    }
  }
})

type FooterProps = {
  color?: 'white' | 'black'
}

const Footer: React.FC<FooterProps> = ({ color = 'white' }) => {
  return (
    <Grid>
      <FooterWrapper className="container">
        <FooterItem color={color} className="four columns font-mono">
          <Link isStyled href="https://twitter.com/JannikWibker">
            <TwitterIcon labelledby="twitter_username" />
            <span id="twitter_username">@JannikWibker</span>
          </Link>
        </FooterItem>
        <Offset />
        <FooterItem color={color} className="four columns font-mono">
          <Link isStyled href="https://github.com/JannikWibker">
            <GithubIcon labelledby="github_username" />
            <span id="github_username">JannikWibker</span>
          </Link>
        </FooterItem>
        <Offset />
        <FooterItem color={color} className="four columns font-mono">
          <Link isStyled href="mailto:jannik@jannikwibker.dev">
            <EmailIcon labelledby="email_adress" />
            <span id="email_adress">jannik@jannikwibker.dev</span>
          </Link>
        </FooterItem>
      </FooterWrapper>
    </Grid>
  )
}

export default Footer

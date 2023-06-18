import React from 'react'
import { styled } from '../stitches.config'
import { EmailIcon, GithubIcon } from './Icons'

import Link from './Link'

const FooterItem = styled('div', {
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
    <div className="py-5 flex gap-8 md:gap-16 place-content-center">
      <FooterItem color={color} className="w-[30%] text-center h-8 text-xs leading-[32px] font-mono">
        <Link isStyled href="https://github.com/JannikWibker">
          <GithubIcon labelledby="github_username" />
          <span id="github_username">JannikWibker</span>
        </Link>
      </FooterItem>
      <FooterItem color={color} className="w-[30%] text-center h-8 text-xs leading-[32px] font-mono">
        <Link isStyled href="mailto:jannik@jannikwibker.dev">
          <EmailIcon labelledby="email_adress" />
          <span id="email_adress">jannik@jannikwibker.dev</span>
        </Link>
      </FooterItem>
    </div>
  )
}

export default Footer

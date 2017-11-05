import React, { Component } from 'react'
import styled from 'styled-components'

import Link from './Link.js'

const FooterWrapper = styled.footer`
  width: 100%;
  height: 72px;
  padding: 20px 0;
`

const FooterItem = styled.div`
  text-align: center;
  width: 100%;
  font-family: Menlo, DejaVu Sans Mono, Lucida Console, monospace, sans-serif;
  font-weight: 100;
  font-size: 12px;
  line-height: 32px;

  img {
    width: 16px;
    height: 16px;
    margin: -4px 4px;
  }

  span {
    text-decoration: none;
    color: white;
  }
`

export default class Header extends Component {
  render() {
    return (
      <FooterWrapper className="container">
        <FooterItem className="four columns">
          <Link style={false} url={'https://twitter.com/JannikWibker'}>
            <div>
              <img alt="Twitter" src={'/static/images/twitter.png'} />
              <span>@JannikWibker</span>
            </div>
          </Link>
        </FooterItem>
        <FooterItem  className="four columns">
          <Link style={false} url={'https://github.com/JannikWibker'}>
            <div>
              <img alt="GitHub" src={'/static/images/github.png'} />
              <span>JannikWibker</span>
            </div>
          </Link>
        </FooterItem>
        <FooterItem  className="four columns">
          <Link style={false} url={'mailto:jannikwibker@gmail.com'}>
            <div>
              <img alt="E-mail" src={'/static/images/email.png'} />
              <span>jannikwibker@gmail.com</span>
            </div>
          </Link>
        </FooterItem>
      </FooterWrapper>
    )
  }
}


// <div className={`${this.style.bg} footer_container __footer`}>
//   <div className={`${this.style.bg} ${this.style.color} container`}>
//     <FooterItem className="four columns">TWITTER LINK</FooterItem>
//     <div className={`${this.style.footer_item} ${this.style.color} footer_item four columns link`}>
//
//     </div>
//     <div className={`${this.style.footer_item} ${this.style.color} footer_item four columns link`}>
//       GITHUB LINK
//     </div>
//     <div className={`${this.style.footer_item} ${this.style.color} footer_item four columns link`}>
//       EMAIL LINK
//     </div>
//   </div>
// </div>

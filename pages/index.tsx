import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Globals from '../components/Globals'
import { clsx } from 'clsx'

const color = {
  bg: 'black',
  text: 'white'
} as const

const IndexPage = () => (
  <div className={clsx(`Page bg-${color.bg} text-${color.text}`)}>
    <Globals pathname="/" color={color.bg} />
    <Header
      left={[
        { url: '/', name: 'home' },
        { url: '/about', name: 'about' },
        { url: '/projects', name: 'projects' }
      ]}
      right={[
        { url: 'https://github.com/JannikWibker/website-v2', name: '(src)' },
        { url: '/', name: 'Jannik Wibker' }
      ]}
      color={color.bg}
    />
    <Main className="text-center">
      <p className="pt-8 text-2xl">Hi, im Jannik</p>
    </Main>
    <Footer color={color.bg} />
  </div>
)

export default IndexPage

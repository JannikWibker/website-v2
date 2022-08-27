import React from 'react'
import { styled } from '../stitches.config'

const Title = styled('span', {
  position: 'absolute',
  top: '12px',
  textAlign: 'center',
  fontSize: '12px',
  marginLeft: '-26.5px'
})

const Button = styled('span', {
  position: 'absolute',
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  top: '50%',
  transform: 'translateY(-50%)'
})

const ButtonClose = styled(Button, {
  left: '13px',
  backgroundColor: '#ff5f56'
})

const ButtonMinimize = styled(Button, {
  left: '33px',
  backgroundColor: '#ffbd2e'
})

const ButtonMaximize = styled(Button, {
  left: '53px',
  backgroundColor: '#27c93f'
})

const BareContainer = ({ width, height }) => styled('div', {
  boxSizing: 'border-box',
  borderRadius: '6px',
  width: width + 'px',
  height: height + 'px',
  maxWidth: '90vw',

  variants: {
    color: {
      black: {
        backgroundColor: 'black',
        color: 'white'
      },
      white: {
        backgroundColor: 'white',
        color: 'black'
      }
    }
  }
})

const Header = styled('div', {
  boxSizing: 'inherit',
  position: 'absolute',
  width: '100%',
  height: '36px',
  maxWidth: '90vw',
  textAlign: 'center',
})

const Border = styled('div', {
  boxSizing: 'inherit',
  position: 'relative',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  maxWidth: '90vw',

  variants: {
    color: {
      black: {
        backgroundColor: 'black',
        border: '1px solid #666'
      },
      white: {
        backgroundColor: 'white',
        border: '1px solid #ccc'
      }
    }
  }
})

const BareMain = ({ fontsize }) => styled('div', {
  boxSizing: 'inherit',
  width: 'calc(100% - 24px)',
  height: 'calc(100% - 36px)',
  margin: '36px 12px 0 12px',
  textAlign: 'left',
  fontSize: (fontsize) + 'px',
  lineHeight: (fontsize + 1) + 'px',
  fontFamily: 'Menlo, DejaVu Sans Mono, Lucida Console, monospace, sans-serif',

  variants: {
    color: {
      black: {
        color: 'white'
      },
      white: {
        color: 'black'
      }
    }
  }
})

const Terminal = ({ width=450, height=260, fontsize=10, color='black', title, children }) => {
  const Container = BareContainer({ width: width || 450, height: height || 260 })
  const Main = BareMain({ fontsize: fontsize })

  return (
    <Container color={color} className="Terminal">
      <Border color={color}>
        <Header>
          <ButtonClose />
          <ButtonMinimize />
          <ButtonMaximize />
          <Title>{title}</Title>
        </Header>
        <Main color={color}>
          {children}
        </Main>
      </Border>
    </Container>
  )
}

export default Terminal

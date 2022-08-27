import { styled } from '../stitches.config'

const Main = styled('main', {
  minHeight: 'calc(100vh - 110px - 72px)',
  fontSize: '14px',
  textAlign: 'center',
  fontWeight: '300',
  overflow: 'auto',

  '@media(min-width:400px)': {
    minHeight: 'calc(100vh - 110px - 32px)'
  },

  '@media(min-width:750px)': {
    minHeight: 'calc(100vh - 110px - 72px)'
  }
})

export default Main

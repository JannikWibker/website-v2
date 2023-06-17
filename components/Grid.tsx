import { styled } from '../stitches.config'

const Grid = styled('div', {
  '.container': {
    position: 'relative',
    width: '100%',
    maxWidth: '960px',
    margin: '0 auto',
    padding: '0',
    boxSizing: 'border-box'
  },

  '.column, .columns': {
    width: '100%',
    float: 'left',
    boxSizing: 'border-box'
  },

  '@media(min-width:400px)': {
    '.container': {
      width: '85%',
      padding: '0'
    }
  },

  '@media(min-width:750px)': {
    '.container': {
      width: '80%',
      paddingTop: '20px',
      paddingBottom: '20px'
    },
    '.column, .columns': {
      marginLeft: '4%'
    },
    '.column:first-child, .columns:first-child': {
      marginLeft: '0'
    }
  },

  '.four.columns': { width: '30.6666666667%' }
})

export default Grid

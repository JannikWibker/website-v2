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

  '.one.column,.one.columns': { width: '4.66666666667%' },
  '.two.columns': { width: '13.3333333333%' },
  '.three.columns': { width: '22%' },
  '.four.columns': { width: '30.6666666667%' },
  '.five.columns': { width: '39.3333333333%' },
  '.six.columns': { width: '48%' },
  '.seven.columns': { width: '56.6666666667%' },
  '.eight.columns': { width: '65.3333333333%' },
  '.nine.columns': { width: '74.0%' },
  '.ten.columns': { width: '82.6666666667%' },
  '.eleven.columns': { width: '91.3333333333%' },
  '.twelve.columns': { width: '100%', marginLeft: '0' },

  '.one-third.column': { width: '30.6666666667%' },
  '.two-thirds.column': { width: '65.3333333333%' },
  '.one-half.column': { width: '48%' },

  '.offset-by-one.column,.offset-by-one.columns': { marginLeft: '8.66666666667%' },
  '.offset-by-two.columns': { marginLeft: '17.3333333333%' },
  '.offset-by-three.columns': { marginLeft: '26%' },
  '.offset-by-four.columns': { marginLeft: '34.6666666667%' },
  '.offset-by-five.columns': { marginLeft: '43.3333333333%' },
  '.offset-by-six.columns': { marginLeft: '52%' },
  '.offset-by-seven.columns': { marginLeft: '60.6666666667%' },
  '.offset-by-eight.columns': { marginLeft: '69.3333333333%' },
  '.offset-by-nine.columns': { marginLeft: '78.0%' },
  '.offset-by-ten.columns': { marginLeft: '86.6666666667%' },
  '.offset-by-eleven.columns': { marginLeft: '95.3333333333%' },

  '.offset-by-one-third.column,.offset-by-one-third.columns': { marginLeft: '34.6666666667%' },
  '.offset-by-two-thirds.column,.offset-by-two-thirds.columns': { marginLeft: '69.3333333333%' },
  '.offset-by-one-half.column,.offset-by-one-half.columns': { marginLeft: '52%' }
})

export default Grid
